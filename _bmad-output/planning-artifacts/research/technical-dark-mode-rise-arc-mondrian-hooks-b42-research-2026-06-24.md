---
stepsCompleted: [1, 2, 3, 4, 5, 6]
status: 'complete'
inputDocuments:
  - '_bmad-output/implementation-artifacts/investigations/dark-mode-rise-sla26lik-investigation.md'
workflowType: 'research'
lastStep: 1
research_type: 'technical'
research_topic: 'Dark mode no Rise 360 (Arc/Mondrian) e hooks de extensão da barra B42'
research_goals: 'Entender como o Arc usa light-dark() e [arc-scheme=dark]; mapear quais variáveis o Mondrian consome; descobrir se há hook no data-mode="rise" da B42 para estender o comportamento atual (que hoje só injeta <h1> fallback).'
user_name: 'Rafael'
date: '2026-06-24'
web_research_enabled: true
source_verification: true
---

# Research Report: technical

**Date:** 2026-06-24
**Author:** Rafael
**Research Type:** technical

---

## Research Overview

Pesquisa técnica híbrida (código-fonte primário + verificação web) sobre o mecanismo de dark mode do Articulate Rise 360 (design systems internos **Arc** e **Mondrian**) e os pontos de extensão do modo `data-mode="rise"` da barra de acessibilidade B42. Decorre da investigação de causa raiz em `_bmad-output/implementation-artifacts/investigations/dark-mode-rise-sla26lik-investigation.md`.

**Objetivos:**
1. Como o Arc usa `light-dark()` e `[arc-scheme=dark]`.
2. Quais variáveis o Mondrian consome (e relação com o Arc).
3. Se há hook no `data-mode="rise"` da B42 para estender (hoje só injeta `<h1>` fallback).

---

## Technical Research Scope Confirmation

**Research Topic:** Dark mode no Rise 360 (Arc/Mondrian) e hooks de extensão da barra B42
**Research Goals:** Entender `light-dark()`/`[arc-scheme=dark]` no Arc; mapear variáveis consumidas pelo Mondrian; verificar hooks do `data-mode="rise"` na B42.

**Technical Research Scope:**

- Architecture Analysis — fluxo de tokens Arc → Mondrian → componentes Rise
- Implementation Approaches — `color-scheme`, `light-dark()`, tematização por atributo `[arc-scheme]`
- Technology Stack — bundles Rise/Mondrian/learn_dist, CSS `@layer`, B42 v2.0.29
- Integration Patterns — pontos de extensão do `data-mode="rise"` na B42
- Performance Considerations — custo de override de tema, especificidade/`!important`

**Research Methodology:**

- Código-fonte como evidência primária (bundles + `b42-accessibility.min.js`)
- Verificação web para spec CSS (`light-dark()`, `color-scheme`) e docs públicas
- Níveis de confiança e múltiplas fontes para afirmações críticas

**Scope Confirmed:** 2026-06-24

---

<!-- Content will be appended sequentially through research workflow steps -->

## Technology Stack Analysis

**Stack tematizado (camadas, de baixo para cima):**

| Camada | Bundle | Papel no tema |
|---|---|---|
| **Arc (design tokens)** | `content/lib/rise/f441d100.css` | Define ~624 tokens `--arc-color-*` e o mecanismo `[arc-scheme]` + `color-scheme`. Fonte da verdade do dark mode. |
| **Mondrian (componentes)** | `content/lib/mondrian/*.js` (CSS-in-JS / adoptedStyleSheets) | **Consome** tokens Arc; não define sistema próprio de cores. |
| **Rise/Learn app shell** | `content/lib/rise/9c23a1cd.css`, `learn_dist/b954bbcb.css` + adoptedStyleSheets | Pinta containers de página (`.lesson__content`, `.page__wrapper--white`) — em parte com **cor fixa**, fora dos tokens Arc. |
| **B42 (barra acessibilidade)** | `_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js` v2.0.29 | Injeta `<link id="dark-mode">` + classe `.dark-mode` no container `#app`. |

Verificação web confirma a spec usada pelo Arc: `light-dark(a,b)` retorna `a` quando `color-scheme` é `light`/ausente e `b` quando é `dark`; **falha silenciosamente** (devolve o 1º valor) se `color-scheme` não estiver setado — _Source: [MDN light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), [web.dev](https://web.dev/articles/light-dark)_. Arc/Mondrian são bundles **internos** da Articulate — sem documentação pública (a busca só retorna o painel de tema do editor Rise 360, não a arquitetura de tokens) — _Source: [Articulate Support: Personalize the Theme](https://www.articulatesupport.com/article/Rise-360-Personalize-the-Theme)_. **Evidência primária = código dos bundles.**

### Objetivo 1 — Como o Arc usa `light-dark()` e `[arc-scheme=dark]`

**Confiança: Alta** (lido direto em `rise/f441d100.css`).

**1a. `[arc-scheme]` controla `color-scheme` via uma variável privada.** O Arc não aplica `color-scheme:dark` diretamente; usa um nível de indireção:

```css
:root:not([arc-scheme]), [arc-scheme=light] { --arc•color•scheme: light;   --arc•color•scheme•inverse: dark; }
[arc-scheme=dark]    { --arc•color•scheme: dark;  --arc•color•scheme•inverse: light; --arc•color•scheme•inverse•nested: dark; }
[arc-scheme=inverse] { --arc•color•scheme: var(--arc•color•scheme•inverse); }
[arc-scheme=inverse] [arc-scheme=inverse] { --arc•color•scheme: var(--arc•color•scheme•inverse•nested); }
:root:not([arc-scheme]), [arc-scheme] { color-scheme: var(--arc•color•scheme, light); }
```

- **Achado não óbvio:** o separador dessas variáveis de controle **não é hífen** — é o caractere **U+2022 (bullet `•`)**. Confirmado por hexdump: `arc` `e2 80 a2` `color` `e2 80 a2` `scheme`. Ou seja, a variável é literalmente `--arc•color•scheme`, distinta dos tokens públicos `--arc-color-*` (hífen). Provável obfuscação intencional para criar uma variável "privada" não-colidível. **Implicação:** não dá para sobrescrever via nome com hífen; o caminho suportado é o **atributo `arc-scheme`** ou `color-scheme`.
- **Suporta `light` / `dark` / `inverse`** (este último inverte o tema do contexto, com aninhamento). É um sistema de troca **por subárvore** (o atributo pode estar em qualquer elemento), não só no `:root`.

**1b. Os tokens semânticos resolvem cor via `light-dark(primitivo-claro, primitivo-escuro)`.** São **234 usos** de `light-dark()` e **~624** tokens `--arc-color-*`. Cada semântico aponta para dois primitivos das escalas `--arc-color-light-neutral-*` e `--arc-color-dark-neutral-*`:

| Token semântico | Valor (`light-dark(claro, escuro)`) |
|---|---|
| `--arc-color-bg-primary` | `light-dark(light-neutral-0, dark-neutral-100)` |
| `--arc-color-bg-mono` | `light-dark(light-neutral-0, dark-neutral-0)` |
| `--arc-color-bg-secondary` | `light-dark(alpha-black-5, alpha-white-10)` |
| `--arc-color-fg-primary` | `light-dark(light-neutral-1000, dark-neutral-1000)` |
| `--arc-color-text-primary` | `var(--arc-color-fg-primary)` (alias) |

**Fluxo completo:** `arc-scheme="dark"` → `--arc•color•scheme:dark` → `color-scheme:dark` → todo `light-dark()` resolve o 2º argumento → todo elemento que usa `var(--arc-color-bg-primary)` etc. escurece automaticamente. **Tudo dentro de `@layer`** (CSS em camadas), o que afeta especificidade de overrides.

### Objetivo 2 — Quais variáveis o Mondrian consome

**Confiança: Alta** (Mondrian referencia tokens Arc; não define paleta própria).

- **Mondrian é consumidor do Arc, não um sistema de tokens paralelo.** Os bundles `mondrian/*.js` referenciam diretamente tokens **Arc** semânticos e primitivos, ex.: `--arc-color-text-primary`, `--arc-color-neutral-700`, `--arc-color-mono-white`, `--arc-color-mono-black`, `--arc-color-critical-root`, `--arc-color-border-selected`, `--arc-color-alpha-white-70/80`, além de tipografia `--arc-font-weight-600`, `--arc-font-size-18`, `--arc-font-family-heading`.
- **Mondrian emite variáveis próprias de layout/componente** (não de cor de tema): `--ov-popover-x/y`, `--ov-internal-video-height`, `--ov-internal-percent-progress`, `--slider-progress-percent`, `--group-justify`, `--ua-scrollbar-width` — setadas em runtime via `element.style.setProperty(...)`.
- **Implicação para dark mode:** como o Mondrian herda do Arc, componentes Mondrian que usam tokens Arc **já escurecem** quando `color-scheme:dark` está ativo. O problema do piloto **não** está no Mondrian — está nos containers do app-shell Rise (`.lesson__content`, `.page__wrapper--white`) que usam **cor fixa `#fff`/`#f5f5f5`** fora dos tokens (ver investigação anterior, Finding 3).

_Source primário: `content/lib/mondrian/0cef9fbc.js`, `content/lib/rise/f441d100.css` (lidos em 2026-06-24)._

## Integration Patterns Analysis

Foco: como a barra **B42** se integra à página Rise e quais são os pontos de extensão para o dark mode (Objetivo 3).

### Objetivo 3 — Existe hook no `data-mode="rise"` para estender?

**Resposta curta: NÃO.** Não há hook/evento/callback associado ao `data-mode="rise"`. O modo `rise` faz **uma única coisa**: injetar um `<h1>` oculto de fallback antes do `init()`. **Confiança: Alta** (varredura completa de `params.mode` / `.mode` no `b42-accessibility.min.js`).

**Evidência — `data-mode` é lido em apenas 2 lugares:**

1. **Fallback `<h1>` (IIFE no topo do arquivo).** Única lógica específica do Rise:

```19:27:_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js
      currentScript.dataset.mode === "rise" &&
      document.body &&
      !document.querySelector("h1")
    ) {
      var h1Fallback = document.createElement("h1");
      h1Fallback.textContent = document.title || "Rise";
      h1Fallback.style.display = "none";
      document.body.appendChild(h1Fallback);
    }
```

2. **Armazenamento de `params.mode` (nunca mais lido).** Em `init`, o valor é guardado, mas a varredura confirma que `this.params.mode` **não é consultado em nenhum outro ponto** — não há `if (params.mode === "rise")` em lugar algum além do IIFE:

```1697:1698:_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js
      this.params.mode =
        CURRENT_SCRIPT.dataset.mode || this.params.mode;
```

**Conclusão:** `data-mode="rise"` **não** ramifica a aplicação de tema. Não existe `MutationObserver`, evento custom, nem callback "onThemeChange"/"onRiseReady" para um tema assinar.

### Como o dark mode é aplicado (caminho genérico, não-Rise)

O toggle noturno usa `addTheme`, que é **agnóstico de modo**:

```2382:2395:_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js
    addTheme(theme, keepOtherThemes = false) {
      var link = $get(`link#${theme}-mode`) || document.createElement("link");
      link.setAttribute("id", `${theme}-mode`);
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", this.params[`${theme}Css`]);
      $get("head").appendChild(link);

      var containerHtml = $get(this.params.container) || $get("body");
      containerHtml.classList.add(`${theme}-mode`);

      if (!keepOtherThemes) {
        this.removeAllThemes(theme);
      }
    },
```

- **Único ponto de injeção:** um `<link id="dark-mode" href={darkCss}>` no `<head>` + classe `.dark-mode` no **container** (resolvido de `data-container`, que no Rise é `#app`). O container vem de `data-container`, **não** de `data-mode`.
- O arquivo carregado é o **`dark-mode.min.css`** (não o `.css`) — ver investigação, Finding 4.

### Padrões de extensão disponíveis (do mais ao menos recomendado)

| # | Abordagem | Como | Toca o vendor? | Trade-off |
|---|---|---|---|---|
| **A** | **Extender o CSS do tema** (`css/mundo-aprendiz/dark-mode.min.css`) | Escopar regras em `.dark-mode` p/ os containers Rise de cor fixa + (opcional) setar `[arc-scheme=dark]`/`color-scheme:dark` no `#app` p/ ativar os tokens Arc `light-dark()` | Não | **Recomendado.** Único ponto suportado; sem patch no `.min.js`. Exige replicar no `.min.css`. |
| **B** | **Acionar o motor nativo do Arc** | No tema, fazer `.dark-mode #app { color-scheme: dark; }` ou injetar `arc-scheme="dark"` no `#app` | Não (CSS) / leve (JS) | Faz Mondrian/Arc escurecerem "de graça"; **não** resolve os containers de cor fixa (precisa combinar com A). |
| **C** | **Criar um hook real no `data-mode="rise"`** | Patchar o `.min.js`: após `addTheme`/no IIFE, disparar `CustomEvent`/aplicar `arc-scheme` no `#app` | **Sim** | Mais poderoso, porém edita o bundle da barra (afeta todos os clientes; manter header de versão). Maior risco/manutenção. |

**Verificação web (mecanismo que a opção B aciona):** setar `color-scheme:dark`/`arc-scheme=dark` no `#app` faz todo `light-dark()` da subárvore resolver o valor escuro automaticamente, sem media query — _Source: [MDN light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), [CSS-Tricks](https://css-tricks.com/almanac/functions/l/light-dark/)_. Porém isso **não** afeta declarações de cor fixa (`#fff`) — por isso A continua necessária.

_Source primário: `_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js` v2.0.29 (lido em 2026-06-24)._

## Architectural Patterns and Design

### Arquitetura do tema (cascata de tokens)

O dark mode "oficial" do Rise segue o padrão **Design Tokens em 3 níveis** (primitivos → semânticos → componentes), com troca por `color-scheme`:

```
[arc-scheme=dark]  →  --arc•color•scheme:dark  →  color-scheme:dark
        │
        ▼
Tokens semânticos:  --arc-color-bg-primary: light-dark(  primitivo-claro , primitivo-escuro )
        │                                                  (light-neutral-*)   (dark-neutral-*)
        ▼
Componentes Mondrian: var(--arc-color-bg-primary) / var(--arc-color-text-primary) ...  → escurecem sozinhos
```

- **Princípio:** _resolução no ponto de uso_ — `var(--token)` lê o valor atual da cascata, e `light-dark()` resolve contra o `color-scheme` vigente. Trocar o esquema reescreve todas as cores sem tocar componentes — _Source: [Solid Web: light-dark tutorial](https://solid-web.com/css-light-dark-function-tutorial/)_.
- **`@layer`:** os tokens e regras Arc vivem em camadas CSS. Overrides do tema da barra (fora de `@layer`) têm prioridade sobre regras em camadas independentemente da especificidade — relevante para a estratégia de override.

### Padrão arquitetural do defeito (anti-padrão de superfície)

A falha do piloto é um descasamento de camadas: o **app-shell Rise** (`.lesson__content` `#f5f5f5`, `.page__wrapper--white` `#fff`) pinta superfícies com **cor literal fora do sistema de tokens**, então fica imune ao `color-scheme:dark`. Já a tipografia herda `color` e muda. Resultado: texto claro sobre fundo claro (anti-padrão "tema parcial"). Isso é estrutural, não um bug pontual: qualquer cor fixa fora de `light-dark()`/tokens não responde ao esquema.

### Padrão de integração da B42 (overlay agnóstico)

A B42 adota um padrão **overlay/decorator agnóstico de host**: aplica tema por (1) `<link>` de CSS + (2) classe `.dark-mode` num container configurável (`data-container`), sem conhecer a arquitetura interna do host (Rise/Webflow). Vantagem: portabilidade entre clientes. Custo: **não** se acopla ao motor de tema nativo do host (Arc) — por isso a correção precisa "reconectar" as duas camadas (acionar `color-scheme` do Arc) ou sobrepor as superfícies (override CSS).

### Escalabilidade / performance dos caminhos de correção

| Critério | A (override CSS) | B (acionar Arc) | C (patch JS) |
|---|---|---|---|
| Custo runtime | Baixo (CSS estático) | Mínimo (1 prop herdada) | Baixo |
| Cobertura | Só seletores listados (frágil a updates do Rise) | Ampla (tudo via tokens) | Ampla |
| Manutenção | Média (sincronizar `.css`↔`.min.css`) | Baixa | Alta (edita vendor da barra) |
| Risco de regressão | Localizado ao tema | Pode escurecer blocos já escuros (`bg--type-dark`) → revisar | Afeta todos os clientes |

**Síntese arquitetural:** a combinação **B + A** é a mais robusta — B faz o sistema de tokens trabalhar a favor (cobertura ampla, baixa manutenção) e A cobre a lacuna das superfícies de cor fixa do app-shell, que nenhum mecanismo de token alcança.

_Source: análise dos bundles + spec CSS (MDN/web.dev/CSS-Tricks), 2026-06-24._

## Implementation Approaches and Technology Adoption

### Estado atual do tema (`css/mundo-aprendiz/dark-mode.css`)

O PoC já implementa o **caminho B** (aciona `color-scheme:dark` em `#app` e descendentes) e parte do **A** (texto `.rise-tiptap`, tabelas, links). **Lacuna confirmada:** faltam os overrides das **superfícies do app-shell** com cor fixa (`.lesson__content`, `.page__wrapper--white`, `.page__header`, `.blocks-lesson`, blocos `.bg--type-light`/`.bg--range-light`, `.block-text`/`.block-statement`/`.block-quote`).

### Snippet recomendado — completar o caminho A (superfícies)

Adicionar ao `dark-mode.css` **e** replicar no `dark-mode.min.css` (arquivo realmente carregado):

```css
/* 7. Superfícies do app-shell Rise (cor fixa fora dos tokens Arc) */
.dark-mode .page__wrapper,
.dark-mode .page__wrapper--white,
.dark-mode .page__header,
.dark-mode .lesson__content,
.dark-mode .theme .lesson__content,
.dark-mode .blocks-lesson {
  background-color: #1c1c1c !important;
}

/* 8. Fundos de bloco "claros" */
.dark-mode .bg--type-light,
.dark-mode .bg--range-light,
.dark-mode .block-text,
.dark-mode .block-statement,
.dark-mode .block-quote {
  background-color: #2a2a2a !important;
  border-color: #515151 !important;
}
```

### Estratégia de adoção (por que A+B e não só A)

- **B (já presente)** faz Mondrian/Arc escurecerem via tokens — cobre muitos componentes "de graça" e é resiliente a updates do Rise.
- **A (completar)** cobre o que o sistema de tokens **não** alcança: superfícies com `#fff`/`#f5f5f5` literais. Sem A, o sintoma persiste (investigação, Findings 2–3).
- **Por que `!important`:** as regras do Rise são `regular` mas vencem por ordem/origem; o override do tema precisa de `!important` para superá-las (investigação, Finding 3).

### Workflow / tooling

- **Sincronização obrigatória `.css` ↔ `.min.css`:** a barra carrega o `.min.css`. Editar só o `.css` não tem efeito (Finding 4). Sem build system no projeto → minificação manual. _Mitigação:_ considerar um passo simples (ex.: `csso`/`cleancss` via npx pontual) ou checklist de "regenerar min".
- **Sem testes automatizados** → validação manual no browser (project-context).

### Testing / QA

1. Servir em `http://localhost:8765`, abrir `piloto-modulo-1-raw-SLa26liK/content/index.html`.
2. Encontro 1 → engrenagem → modo de cores → Modo noturno ON.
3. Conferir computed `background-color` de `.page__wrapper--white` e `.lesson__content` (devem ficar escuros).
4. Verificar contraste de corpo, títulos de marca (teal) e blocos já escuros (`bg--type-dark` não deve inverter).

### Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Esquecer de regenerar `.min.css` | Checklist/CI leve; tratar `.min.css` como artefato gerado |
| Update do Rise muda nomes de classe de superfície | Preferir B (tokens) como base; A como complemento; reauditar após reexport |
| Inverter blocos já escuros (`bg--type-dark`) | Escopar overrides só a classes "light"; testar lado a lado |
| Override fixo não acompanha tema de marca | Onde possível, usar tokens Arc (`var(--arc-color-bg-primary)`) em vez de hex |

## Technical Research Recommendations

### Implementation Roadmap

1. **(A)** Adicionar overrides de superfície (snippets 7–8) no `dark-mode.css`.
2. **Regenerar** `dark-mode.min.css` a partir do `.css`.
3. **(B)** Manter o `color-scheme:dark` já existente; onde viável, trocar hex fixos por `var(--arc-color-*)` para herdar a paleta de marca.
4. **Validar** no browser (checklist acima) com dark mode ON.
5. **Documentar** o par `.css`/`.min.css` como fonte/artefato.

### Technology Stack Recommendations

- Manter a estratégia **CSS-only** (caminho A+B); **evitar** o patch JS (caminho C) salvo necessidade futura de hook real — ele edita o vendor da barra e afeta todos os clientes.
- Reusar o mecanismo nativo do Arc (`color-scheme`/`light-dark()`) como motor primário; tratar overrides fixos como exceção pontual.

### Skill Development Requirements

- Familiaridade com **design tokens** + `light-dark()`/`color-scheme` e camadas `@layer`.
- Entendimento da resolução de especificidade entre regras `@layer` (Rise) e regras fora de layer (tema da barra).

### Success Metrics and KPIs

- Computed `background-color` das superfícies-alvo = escuro com dark mode ON (0 superfícies brancas residuais).
- Contraste de texto do corpo ≥ 4.5:1 (WCAG AA) em fundo escuro.
- 0 regressões em blocos já escuros e em alto contraste.
- `.css` e `.min.css` em sincronia (diff equivalente).

_Source: `css/mundo-aprendiz/dark-mode.css` + investigação prévia + spec CSS, 2026-06-24._

## Research Synthesis

### Executive Summary

O dark mode do Articulate Rise 360 é construído sobre o design system interno **Arc**, que usa o padrão moderno de **design tokens + `light-dark()`**: um atributo `[arc-scheme=dark]` alimenta (via uma variável privada com separador bullet `•`) a propriedade `color-scheme`, e ~624 tokens `--arc-color-*` resolvem cor com `light-dark(claro, escuro)` (234 usos). O **Mondrian** é apenas um **consumidor** desses tokens (não tem paleta própria), então seus componentes escurecem automaticamente quando `color-scheme:dark` está ativo. A barra **B42** integra-se como um overlay agnóstico: aplica `.dark-mode` + um `<link>` de CSS no container `#app`, **sem** se acoplar ao motor do Arc.

A consequência arquitetural — e a causa do defeito no piloto — é um descasamento de camadas: as superfícies do **app-shell Rise** (`.lesson__content`, `.page__wrapper--white` etc.) usam **cor literal `#fff`/`#f5f5f5` fora dos tokens**, ficando imunes ao `color-scheme:dark`, enquanto a tipografia (que herda `color`) escurece — produzindo texto claro sobre fundo claro.

Sobre extensibilidade: **não existe hook no `data-mode="rise"`**. O modo `rise` só injeta um `<h1>` oculto de fallback; `params.mode` é armazenado mas nunca mais lido. O único ponto de extensão suportado é o **CSS do tema** (`dark-mode.min.css`). A correção robusta combina acionar o motor Arc (`color-scheme:dark` no `#app` — já no PoC) com overrides `!important` das superfícies de cor fixa (lacuna a completar).

**Key Technical Findings:**

- **Arc:** `[arc-scheme]` (`light`/`dark`/`inverse`) → variável privada `--arc•color•scheme` (separador **U+2022**, não hífen) → `color-scheme: var(...)`; tokens semânticos via `light-dark(primitivo-claro, primitivo-escuro)`.
- **Mondrian:** consome tokens Arc (`--arc-color-*`, `--arc-font-*`); emite só variáveis de layout em runtime (`--ov-*`); sem sistema de cor próprio.
- **B42:** sem hook em `data-mode="rise"` (só `<h1>` fallback); tema aplicado por `addTheme` agnóstico (`<link>` + `.dark-mode` no container `#app`).
- **Defeito:** anti-padrão de "tema parcial" — superfícies do app-shell com cor fixa fora dos tokens.

**Technical Recommendations (top 4):**

1. **Caminho A+B (CSS-only):** manter `color-scheme:dark` no `#app` (motor Arc) + adicionar overrides `!important` das superfícies (`.lesson__content`, `.page__wrapper--white`, `.page__header`, `.blocks-lesson`, blocos `.bg--*-light`).
2. **Regenerar sempre o `.min.css`** (arquivo realmente carregado) — tratar como artefato gerado.
3. **Preferir tokens Arc** (`var(--arc-color-bg-primary)`) a hex fixo onde possível, para herdar a paleta de marca.
4. **Evitar o patch JS (caminho C)** salvo necessidade futura de hook real — ele edita o vendor da barra e afeta todos os clientes.

### Goals — Achievement

| Objetivo | Status | Evidência |
|---|---|---|
| 1. Arc usa `light-dark()` / `[arc-scheme=dark]` | ✅ Respondido (Alta) | `rise/f441d100.css` (regras `[arc-scheme]`, 234 `light-dark()`, ~624 tokens) + hexdump |
| 2. Variáveis que o Mondrian consome | ✅ Respondido (Alta) | `mondrian/*.js` referencia tokens `--arc-*`; emite `--ov-*` em runtime |
| 3. Hook no `data-mode="rise"` da B42 | ✅ Respondido (Alta) — **não existe** | `b42-accessibility.min.js`: `data-mode` em 2 pontos; `params.mode` nunca relido |

### Methodology & Source Verification

- **Tipo:** pesquisa técnica híbrida — **código-fonte como evidência primária** (bundles Rise/Mondrian + `b42-accessibility.min.js`), verificação web para spec CSS.
- **Validação cruzada:** achados de código confrontados com a investigação ao vivo prévia (computed styles, porta 8765) e com a spec pública.
- **Limitação:** Arc e Mondrian são bundles internos da Articulate, **sem documentação pública** de arquitetura; nomes/SHAs podem mudar a cada reexport do pacote Rise.

**Fontes:**

- Código (primário, lido 2026-06-24): `piloto-modulo-1-raw-SLa26liK/content/lib/rise/f441d100.css`, `content/lib/rise/9c23a1cd.css`, `content/lib/mondrian/0cef9fbc.js`, `_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js`, `css/mundo-aprendiz/dark-mode.css`
- Investigação prévia: `_bmad-output/implementation-artifacts/investigations/dark-mode-rise-sla26lik-investigation.md`
- Web (spec/verificação): [MDN — light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), [web.dev — light-dark](https://web.dev/articles/light-dark), [CSS-Tricks — light-dark()](https://css-tricks.com/almanac/functions/l/light-dark/), [Solid Web — light-dark tutorial](https://solid-web.com/css-light-dark-function-tutorial/), [Articulate Support — Personalize the Theme](https://www.articulatesupport.com/article/Rise-360-Personalize-the-Theme)

**Research complete:** 2026-06-24

