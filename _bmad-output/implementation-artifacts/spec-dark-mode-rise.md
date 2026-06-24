---
title: 'Dark mode funcional Rise 360 (cliente mundo-aprendiz) — completar caminho A'
type: 'feature'
created: '2026-06-24'
status: 'in-progress'
baseline_commit: '47005753d45268b77c5fe56cafb7b46c8ecf1352'
context:
  - '{project-root}/_bmad-output/specs/spec-dark-mode-rise/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-dark-mode-rise/strategy.md'
  - '{project-root}/_bmad-output/specs/spec-dark-mode-rise/acceptance-criteria.md'
  - '{project-root}/_bmad-output/project-context.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Ao ativar o Modo noturno da barra B42 no piloto Rise (`SLa26liK`), só a cor da fonte muda; as superfícies do app-shell Rise (`.page__wrapper--white` `#fff`, `.lesson__content` `#f5f5f5`, `.page__header`, `.blocks-lesson`, blocos `.bg--type-light`/`.bg--range-light`) pintam fundo com cor literal fora dos tokens Arc, imune a `color-scheme:dark` — produzindo texto claro sobre fundo claro (reprova WCAG AA).

**Approach:** Completar o **caminho A** (caminho B `color-scheme:dark` no `#app` já existe) adicionando overrides `!important` escopados em `.dark-mode` para as superfícies e fundos de bloco de cor fixa, usando a paleta dark do `strategy.md`. CSS-only no tema do cliente `css/mundo-aprendiz/`; editar a fonte `dark-mode.css` e **regenerar** o artefato carregado `dark-mode.min.css`.

## Boundaries & Constraints

**Always:**
- Escopar TODAS as regras em `.dark-mode` (efetivo `#app.dark-mode` e descendentes).
- `!important` obrigatório nos overrides de superfície (regras Rise são `regular` e vencem por ordem).
- Manter `dark-mode.css` (fonte) e `dark-mode.min.css` (carregado pela barra) em sincronia — `.min.css` é artefato gerado.
- Paleta: página `#1c1c1c`, bloco/card `#2a2a2a`, borda `#515151`, texto `#ededed`, link `#70cbfa`, header de tabela `#3d3d3d` (default confirmado da Open Question 3).
- Preservar o caminho B e as regras já existentes (tipografia, tabelas, links).
- Estruturar o arquivo para reuso por cliente (CAP-5): paleta/seletores organizados e comentados no topo.

**Ask First:**
- Mudar a paleta dark assumida.
- Trocar hex fixo por `var(--arc-color-*)` como política geral (default desta entrega: hex da paleta).
- Qualquer tratamento de texto-sobre-imagem além de deixar TODO (AC-10).

**Never:**
- NÃO inverter/clarear blocos `.bg--type-dark` (já escuros).
- NÃO editar a B42 (`b42-accessibility.min.js`) nem os bundles Rise (`content/lib/**`).
- NÃO adicionar build system / bundler / framework / `package.json`.
- NÃO criar hook em `data-mode="rise"` (caminho C).
- NÃO criar um novo cliente nesta entrega (CAP-5 = só estrutura/organização).

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Superfície de página | dark mode ON em `.page__wrapper--white`/`.lesson__content`/`.page__header`/`.blocks-lesson` | computed `background-color` escuro (≈ `#1c1c1c`); 0 superfície branca residual | N/A |
| Fundo de bloco claro | `.bg--type-light`/`.bg--range-light`, card WHITE, bg LIGHT/GRAY | fundo ≈ `#2a2a2a`, borda ≈ `#515151`, texto AA | N/A |
| Bloco já escuro | `.bg--type-dark` com dark ON | permanece escuro (não invertido), texto claro legível | não aplicar override de superfície a `bg--type-dark` |
| `.min.css` desatualizado | edição só na fonte `.css` | alteração NÃO aparece no browser | regenerar `.min.css` e reconferir |

</frozen-after-approval>

## Code Map

- `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css` -- FONTE do tema; já tem caminho B + tipografia/tabelas/links; adicionar overrides de superfície/bloco (caminho A).
- `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.min.css` -- ARTEFATO carregado pela barra (`addTheme` → `data-dark-css="mundo-aprendiz"`); regenerar após editar a fonte.
- `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/css-applier.js` -- motor JS opt-in (carregado pela B42 só com `data-applier="true"`, quando o dark liga); regra `keep-botao-panels` marca os cartões "botao-dinamico" com `.dm-keep-original`.
- `piloto-modulo-1-raw-SLa26liK/content/index.html` -- ponto de integração da barra (`#app`, `data-dark-css`, `data-applier="true"`); só referência para validação, não editar.
- `piloto-modulo-1-raw-SLa26liK/content/lib/rise/9c23a1cd.css` -- vendor (origem das superfícies de cor fixa); `.block-wrapper`/`.block-card` pintam `background:var(--color-background)` e texto `var(--color-text)`; só leitura/auditoria.
- `piloto-modulo-1-raw-SLa26liK/content/lib/rise/9b5bf92d.js` -- vendor; renderiza blocos `html` num iframe de sandbox (`lib/sandbox/sandbox.html`, `allow-same-origin`) e injeta o `srcdoc` via postMessage; só leitura.

## Tasks & Acceptance

**Execution:**
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css` -- adicionar bloco de variáveis de paleta (comentado, topo) + overrides de superfícies (`.page__wrapper`, `.page__wrapper--white`, `.page__header`, `.lesson__content`, `.theme .lesson__content`, `.blocks-lesson`) → `#1c1c1c !important` -- escurecer o app-shell (CAP-2).
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css` -- adicionar overrides de fundos de bloco claros (`.bg--type-light`, `.bg--range-light`, `.block-text`, `.block-statement`, `.block-quote`, cards) → `#2a2a2a !important` + borda `#515151 !important`, sem tocar `.bg--type-dark` -- fundos de bloco/cards (CAP-2/3, AC-11).
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css` -- reforçar legibilidade por tipo (listas/marcadores, citações/realce, botões foco/hover) reusando paleta; deixar TODO explícito para texto-sobre-imagem (AC-10) -- CAP-3.
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.min.css` -- regenerar minificado a partir da fonte (npx csso/cleancss ou manual) -- sincronia (CAP-4, AC-12).

**Execution (ajuste — cartões "botao-dinamico"):**
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/css-applier.js` -- regra `keep-botao-panels`: varre `iframe[data-rise-frontend-sandbox]`, detecta `.botao-dinamico-container` no `contentDocument` (mesma origem), e marca o cartão (blocos contíguos de mesma cor autoral) + o iframe-SVG imediatamente antes/depois com `.dm-keep-original`. Observa `load` e o DOM interno do iframe para re-rodar quando o conteúdo é injetado (postMessage). Idempotente.
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css` -- seção "PAINEIS PRESERVADOS": `.dark-mode .dm-keep-original` recebe `color-scheme:light`, fundo `var(--color-background)`, texto `var(--color-text)`, iframe `background:transparent`, links `var(--color-theme)` — devolve o visual do modo claro reusando tokens do Rise. Vence o caminho A/B por especificidade + `!important`.
- [x] `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.min.css` -- regenerado (`npx csso-cli`).

**Acceptance Criteria:**
- Given o piloto servido via HTTP com dark mode ON, when inspeciono `.page__wrapper--white`/`.lesson__content`/`.page__header`/`.blocks-lesson`, then o computed `background-color` é escuro (≈ `#1c1c1c`) e não há superfície branca residual ao rolar (AC-1).
- Given blocos `.bg--type-light`/`.bg--range-light`/cards WHITE com dark ON, when os inspeciono, then fundo ≈ `#2a2a2a`, bordas ≈ `#515151` e texto interno AA (AC-3).
- Given texto/títulos/listas/citações/tabelas/links/botões com dark ON, when leio/foco, then mantêm contraste ≥ 4.5:1 e estados perceptíveis (AC-2/4/5/6/7/8).
- Given blocos `.bg--type-dark` com dark ON, when os inspeciono, then permanecem escuros (não invertidos) e legíveis (AC-11).
- Given uma alteração na fonte `.css`, when o `.min.css` não foi regenerado, then o efeito não aparece; após regenerar, os dois ficam equivalentes (AC-12).
- **AC-14 (novo) — cartões "botao-dinamico" preservados:** Given um cartão cujo iframe contém `.botao-dinamico-container` (ex.: ASSISTA, INTERAÇÃO, LEIA E OUÇA, OUÇA, ESTUDO DE CASO) com dark ON, when o inspeciono, then o fundo do cartão e o SVG de borda (topo/base) permanecem com a cor autoral do modo claro (≈ `#bedfcb`/`#ededed`), o texto mantém a cor de contraste do claro, e nenhum iframe do grupo fica branco/escuro residual. And outros iframes (não `botao-dinamico`) seguem o comportamento padrão do dark (tratados caso a caso).

## Design Notes

- **Não inverter `bg--type-dark`:** os overrides de bloco miram só classes "light" (`.bg--type-light`/`.bg--range-light`); não usar seletor genérico que pegue blocos escuros. O caminho B já cuida do que é token-based.
- **Tokens vs hex:** entrega usa hex da paleta (default). Onde houver token Arc equivalente, é candidato a `var(--arc-color-*, #hex)` no futuro (CAP-5) — não obrigatório agora.
- **AC-9 (interativos) / AC-10 (imagem):** interativos escurecem majoritariamente via caminho B (tokens Arc); imagem-texto fica como TODO até decisão da Open Question. Validar AC-9 visualmente; AC-10 fica pendente declarado.
- **Cartões "botao-dinamico" (AC-14):** o conteúdo do cartão vem de um iframe de sandbox (mesma origem) e CSS do pai não cruza a fronteira — por isso a detecção é via JS (`css-applier.js` lê `contentDocument`). O sinal é o `.botao-dinamico-container` DENTRO do iframe, **não** "todo iframe" (outros iframes existem no curso e são casos individuais do autor). A restauração reusa os tokens do próprio Rise (`--color-background`/`--color-text`) em vez de hex fixo, então fica fiel ao claro e independe da paleta da marca — coerente com CAP-5 (reuso por cliente). `color-scheme:light` no subtree desfaz o caminho B só ali dentro; os SVGs de borda ficam transparentes mostrando página/cartão. A regra é idempotente e re-roda na troca de lição e na injeção tardia do iframe.

## Verification

**Commands:**
- `python3 -m http.server 8765` (na raiz do repo) -- expected: servidor sobe; abrir `http://localhost:8765/piloto-modulo-1-raw-SLa26liK/content/index.html`.
- regenerar min -- expected: `dark-mode.min.css` equivalente à fonte (diff de minificação nulo).

**Manual checks (if no CLI):**
- Encontro 1 → engrenagem → modo de cores → Modo noturno ON. Conferir via DevTools: computed `background-color` escuro em `.page__wrapper--white` e `.lesson__content`; zero superfície branca ao rolar; `.bg--type-dark` intacto; contraste de corpo AA.
