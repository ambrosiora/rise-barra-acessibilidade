# Estratégia token-based (A+B) — dark mode Rise

Companion de `SPEC.md`. Detalha **como** a estratégia funciona (a arquitetura de tokens e os dois caminhos combinados). O kernel cita; este arquivo segura o detalhe.

## Cascata de tokens do Rise (3 níveis)

```
[arc-scheme=dark]  →  --arc•color•scheme:dark  →  color-scheme:dark
        │                (variável "privada", separador U+2022)
        ▼
Tokens semânticos:  --arc-color-bg-primary: light-dark( primitivo-claro , primitivo-escuro )
        │                                              (light-neutral-*)    (dark-neutral-*)
        ▼
Componentes Mondrian: var(--arc-color-bg-primary) / var(--arc-color-text-primary) … → escurecem sozinhos
```

- **Arc** (`content/lib/rise/f441d100.css`) é a fonte da verdade: ~624 tokens `--arc-color-*`, 234 usos de `light-dark()`. O atributo `[arc-scheme]` (`light`/`dark`/`inverse`) alimenta `color-scheme` via a variável privada `--arc•color•scheme`.
- **Mondrian** é **consumidor** dos tokens Arc (não tem paleta própria) → seus componentes escurecem de graça quando `color-scheme:dark` está ativo.
- **`light-dark(a,b)`** retorna `a` se `color-scheme` é `light`/ausente e `b` se `dark`. **Falha silenciosa:** sem `color-scheme` setado, devolve `a` (claro). Por isso o caminho B é necessário.
- Tudo dentro de `@layer` → regras do tema **fora de layer** vencem regras em layer independentemente da especificidade.

## Por que A **e** B (não só um)

| | Caminho B — acionar Arc | Caminho A — override de superfícies |
|---|---|---|
| **O que faz** | `color-scheme:dark` (e/ou `arc-scheme=dark`) no `#app` → tokens `light-dark()` e Mondrian escurecem | `background … !important` nos containers de cor fixa que tokens não alcançam |
| **Cobertura** | Ampla (tudo que usa tokens) | Só os seletores listados |
| **Manutenção** | Baixa (resiliente a updates do Rise) | Média (sincronizar `.css`↔`.min.css`; reauditar após reexport) |
| **Resolve o defeito do piloto?** | Não sozinho (superfícies usam `#fff`/`#f5f5f5` literais) | Sim, mas frágil isolado |
| **Risco** | Pode escurecer blocos já escuros → escopar | Localizado ao tema |

**Síntese:** B é o motor (cobertura + baixa manutenção); A cobre a lacuna das superfícies literais do app-shell que nenhum token alcança. Onde houver token Arc equivalente, preferir `var(--arc-color-*)` a hex fixo (ver Open Question no kernel).

## Como a B42 aplica o tema (contexto de integração)

- `addTheme(theme)` injeta `<link id="dark-mode" href={params.darkCss}>` no `<head>` e adiciona `.dark-mode` ao container de `data-container` (`#app` no Rise).
- `params.darkCss` = `css/{cliente}/dark-mode.min.css` (definido por `data-dark-css="{cliente}"`). **É o `.min.css` que carrega.**
- Não há evento/callback de tema; `data-mode="rise"` não participa. Logo, toda lógica vive no CSS.

## Paleta dark (alvo atual — assumption, revisar p/ tokens de marca)

| Papel | Valor |
|---|---|
| Superfície de página | `#1c1c1c` |
| Superfície de bloco/card | `#2a2a2a` |
| Linhas alternadas de tabela | `#2a2a2a` |
| Cabeçalho de tabela | `#3d3d3d` |
| Borda | `#515151` |
| Texto | `#ededed` |
| Link | `#70cbfa` |

## Estrutura de reuso por cliente (CAP-5)

- Cada cliente tem `_BARRA-ACESSIBILIDADE-LOCAL/css/{cliente}/` com `dark-mode`, `contrast-mode`, `print`, `additional` (+ `.min.css`).
- Adotar dark mode em novo cliente = copiar a pasta de um cliente existente, ajustar a paleta (preferencialmente variáveis no topo do arquivo) e apontar `data-dark-css="{novo-cliente}"`. Nenhuma edição na B42 nem nos bundles Rise.
- A camada A (lista de seletores de superfície) é comum a qualquer export Rise; a paleta é o que varia por marca.

## Workflow obrigatório `.css` ↔ `.min.css`

1. Editar a fonte `dark-mode.css`.
2. Regenerar `dark-mode.min.css` (minificação manual; ex.: `npx csso`/`cleancss` pontual). Tratar `.min.css` como **artefato gerado**.
3. Validar no browser com dark mode ON (servir via HTTP, nunca `file://`).
