# Investigation: Dark mode B42 no piloto Rise (SLa26liK) — fonte muda, mas containers/backgrounds não

## Hand-off Brief

1. **What happened.** Ao acionar o modo noturno da barra B42 no piloto Rise, só a cor da fonte muda; os fundos continuam brancos porque o tema escurece apenas `#app` (que é transparente/atrás) enquanto a superfície visível da página vem de containers Rise com `background:#fff`/`#f5f5f5` próprios (`.page__wrapper--white`, `.lesson__content`, `.page__header`, `.blocks-lesson`, blocos `.bg--type-light`).
2. **Where the case stands.** Concluded — causa raiz Confirmed ao vivo (porta 8765) via computed styles e CSS.getMatchedStylesForNode.
3. **What's needed next.** Expandir `mundo-aprendiz/dark-mode.css` (E regenerar o `.min.css`, que é o arquivo realmente carregado) para sobrescrever o `background` desses containers/blocos Rise, não só do `#app`.

## Case Info

| Field            | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| Ticket           | N/A                                                                        |
| Date opened      | 2026-06-24                                                                  |
| Status           | Concluded                                                                   |
| System           | linux; export estático Rise 360 (SLa26liK); B42 v2.0.29; servido em http://localhost:8765 |
| Evidence sources | `_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js`, `mundo-aprendiz/dark-mode.css`, bundles Rise `content/lib/`, DOM ao vivo |

## Problem Statement

No piloto Rise (`piloto-modulo-1-raw-SLa26liK`), ao abrir a barra B42 (engrenagem) → modo de cores → toggle modo noturno, a fonte muda de cor mas os demais elementos (fundos de blocos, wrappers, cards) permanecem claros. Objetivo: mapear os seletores Rise (`.lesson__content`, `.page__wrapper--white`, tokens Arc/Mondrian) para expandir `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css`.

## Evidence Inventory

| Source   | Status    | Notes |
| -------- | --------- | ----- |
| `b42-accessibility.min.js` | Available | Mecanismo de toggle e aplicação de classe identificados |
| `mundo-aprendiz/dark-mode.css` | Available | CSS atual (PoC) — cobre `#app` bg + `.rise-tiptap` texto |
| `content/index.html` | Available | `data-container="#app"`, `data-dark-css="mundo-aprendiz"` |
| Bundles Rise (`9c23a1cd.css` etc.) | Partial | Minificados em `@layer`; classes e tokens presentes mas difíceis de ler estáticos |
| DOM ao vivo (computed styles) | Pending | Investigação no navegador (servidor 8765) |

## Confirmed Findings

### Finding 1: A classe `dark-mode` é aplicada ao `#app`, não ao `html`/`body`

**Evidence:** `_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js:2390-2391` (`addTheme`): `var containerHtml = $get(this.params.container) || $get("body"); containerHtml.classList.add(`${theme}-mode`);`. Container resolvido de `data-container="#app"` em `piloto-modulo-1-raw-SLa26liK/content/index.html:35` e `b42-accessibility.min.js:1695-1696`.

**Detail:** Logo, no Rise o seletor efetivo é `#app.dark-mode` e descendentes `.dark-mode .xxx`. Regras baseadas em `html.dark-mode`/`body.dark-mode` NÃO se aplicam neste modo.

### Finding 2: O CSS atual só cobre o fundo do `#app` e a cor da fonte

**Evidence:** `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css:14-37` — define `background-color` apenas em `#app.dark-mode` e `color` em `.rise-tiptap*` e `a`.

**Detail:** Explica o sintoma: a fonte herda `#ededed` (muda), mas cada bloco Rise tem fundo branco próprio que cobre o fundo escuro do `#app`. Sem regras para os containers internos (`.lesson__content`, `.page__wrapper--white`, blocos), eles permanecem claros.

### Finding 3: Containers Rise pintam o fundo com `#fff`/`#f5f5f5` hardcoded — NÃO via tokens Arc `light-dark()`

**Evidence:** `CSS.getMatchedStylesForNode` (node `.page__wrapper--white`) → regra `.page__wrapper--white { background-color:#fff }` (styleSheet `style-sheet-262606-44`, origin `regular`, **sem `!important`**). `.lesson__content { background:#f5f5f5 }` e `.theme .lesson__content`. Computed styles ao vivo (dark mode ON): `.page__wrapper--white` `rgb(255,255,255)`, `.lesson__content` `rgb(245,245,245)`, `.page__header`/`.blocks-lesson`/`.block-text`/`.bg--type-light` `rgb(255,255,255)`.

**Detail:** O `.min.css` atual já aplica `color-scheme:dark`, mas isso só afeta tokens `light-dark()` (ex.: `--arc-color-bg-primary: light-dark(#fff,#2a2a2a)`). Como esses containers usam cor fixa (não o token), `color-scheme:dark` não os escurece. Por isso só a fonte (que herda `color:#ededed`) muda.

### Finding 4: A barra carrega `dark-mode.min.css`, não `dark-mode.css`

**Evidence:** Link injetado ao vivo: `href = .../css/mundo-aprendiz/dark-mode.min.css` (`addTheme` usa `params.darkCss` = `css/mundo-aprendiz/dark-mode.min.css`, `b42-accessibility.min.js:1629` + `setupCustomCss`). O `.min.css` é cópia minificada manual do `.css` e está em sincronia hoje.

**Detail:** Edições feitas só no `dark-mode.css` NÃO têm efeito até serem replicadas no `dark-mode.min.css`. Risco de workflow.

## Hypothesized Paths

### Hypothesis 1: Containers Rise definem background branco via tokens Arc/Mondrian

**Status:** Refuted

**Resolution:** `CSS.getMatchedStylesForNode` mostra `background-color:#fff` / `background:#f5f5f5` literais nos containers, não `var(--arc-...)`/`light-dark()`. Logo, sobrescrever tokens não resolve; é preciso sobrescrever o `background` dos seletores.

## Source Code Trace

| Element       | Detail |
| ------------- | ------ |
| Toggle origin | `b42-accessibility.min.js:1639-1661` (`showColorDarkContrast` → `addTheme`) |
| Class target  | `#app` (de `data-container="#app"`) — `b42-accessibility.min.js:2390-2391` |
| Arquivo carregado | `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.min.css` (NÃO o `.css`) |
| Superfícies brancas | `.page__wrapper--white` (#fff), `.lesson__content`/`.theme .lesson__content` (#f5f5f5), `.page__header`, `.blocks-lesson`, blocos `.bg--type-light`/`.bg--range-light`, `.block-text`/`.block-statement`/`.block-quote` |
| Bundles Rise  | adoptedStyleSheets (CSS construído via JS) — origem das regras de bloco |

## Conclusion

**Confidence:** High (causa raiz Confirmed ao vivo + regras CSS identificadas com origem e prioridade).

A barra escurece só `#app` (transparente) e a cor da fonte (`.rise-tiptap`). A superfície visível da página é dos containers Rise com `background` branco fixo, sem `!important`, que cobrem o `#app`. Resultado: texto claro sobre fundo branco (contraste ruim). Correção = escurecer esses containers no tema.

## Recommended Next Steps

### Fix direction

Expandir o tema mundo-aprendiz (no `dark-mode.css` **e** regenerar o `dark-mode.min.css`) com overrides de `background` (`!important` para vencer as regras `regular` do Rise) escopados em `.dark-mode`:

- Superfícies de página: `.dark-mode .page__wrapper`, `.dark-mode .page__wrapper--white`, `.dark-mode .lesson__content`, `.dark-mode .theme .lesson__content`, `.dark-mode .page__header`, `.dark-mode .blocks-lesson` → fundo escuro (ex.: `#1c1c1c`/`#2a2a2a`).
- Fundos de bloco: `.dark-mode .bg--type-light`, `.dark-mode .bg--range-light`, `.dark-mode .block-text`, `.dark-mode .block-statement`, `.dark-mode .block-quote` → fundo escuro + bordas.
- Revisar legibilidade de títulos com cor de marca (teal) e blocos que já são escuros (`bg--type-dark`) para não inverter indevidamente.

### Diagnostic

Após editar, recarregar com dark mode ON e reconferir computed `background-color` de `.page__wrapper--white` e `.lesson__content` (devem ficar escuros) e contraste do texto do corpo.

## Reproduction Plan

1. Servir em `http://localhost:8765` e abrir `piloto-modulo-1-raw-SLa26liK/content/index.html`.
2. INICIAR → entrar no Encontro 1 → engrenagem → modo de cores → toggle Modo noturno.
3. Rolar a página: texto fica cinza-claro sobre fundo branco (ilegível). Confirma o defeito.
