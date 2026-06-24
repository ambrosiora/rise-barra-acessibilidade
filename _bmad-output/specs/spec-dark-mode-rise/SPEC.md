---
id: SPEC-dark-mode-rise
companions:
  - strategy.md
  - pilot-blocks.md
  - acceptance-criteria.md
  - ../../project-context.md
sources:
  - ../../planning-artifacts/research/technical-dark-mode-rise-arc-mondrian-hooks-b42-research-2026-06-24.md
  - ../../implementation-artifacts/investigations/dark-mode-rise-sla26lik-investigation.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability only — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# Dark mode funcional e escalável para Rise 360 via tema B42

## Why

Uma **dor concreta a resolver** com uma **oportunidade a capturar**. Hoje, ao acionar o modo noturno da barra de acessibilidade B42 no piloto Rise 360 (`piloto-modulo-1-raw-SLa26liK`), apenas a cor da fonte muda: as superfícies da página continuam brancas (`#fff`/`#f5f5f5`), produzindo texto claro sobre fundo claro — um anti-padrão de "tema parcial" ilegível, que reprova contraste WCAG e quebra a experiência do aluno (afetando todo learner que ativa o modo noturno). A causa raiz está confirmada ao vivo: a B42 escurece só o container `#app` (transparente) e a tipografia herdada, enquanto os containers do app-shell Rise pintam fundo com cor literal fora dos design tokens Arc, imune a `color-scheme:dark`. A oportunidade: resolver isso de forma **token-based e parametrizável por cliente** para que o mesmo tema vire um padrão reusável por outros cursos/clientes (`css/{cliente}/`), não um remendo de uma página só. A correção é CSS-only no tema do cliente — a B42 não expõe hook em `data-mode="rise"` e seu bundle é vendor compartilhado.

## Capabilities

- **CAP-1 — Acionar o motor de tema nativo do Arc (caminho B)**
  - **intent:** O tema ativa `color-scheme:dark` no container `#app.dark-mode` e descendentes, fazendo todo token `light-dark()` do Arc e os componentes Mondrian que os consomem escurecerem automaticamente, sem media query e sem tocar o vendor.
  - **success:** Com dark mode ON, componentes que pintam via `var(--arc-color-*)` (ex.: superfícies/textos tematizados por token) resolvem o valor escuro; verificável por computed style escuro em ao menos um componente Mondrian/Arc que antes era claro.

- **CAP-2 — Escurecer as superfícies de cor fixa do app-shell (caminho A)**
  - **intent:** O tema sobrescreve o `background` dos containers Rise que usam cor literal fora dos tokens — `page__wrapper`/`page__wrapper--white`, `lesson__content` (e `.theme .lesson__content`), `page__header`, `blocks-lesson` e fundos de bloco `bg--type-light`/`bg--range-light` — para superfícies escuras.
  - **success:** Com dark mode ON, o computed `background-color` de `.page__wrapper--white` e `.lesson__content` é escuro (0 superfícies brancas residuais nas páginas do piloto).

- **CAP-3 — Legibilidade e contraste por tipo de conteúdo**
  - **intent:** Cada tipo de conteúdo do piloto (texto, títulos, listas, citações, tabelas, botões, blocos interativos, imagem-texto) permanece legível em dark, sem inverter indevidamente blocos que já são escuros (`bg--type-dark`).
  - **success:** Todos os ACs Given/When/Then de `acceptance-criteria.md` passam; texto de corpo atinge contraste ≥ 4.5:1 (WCAG AA) sobre fundo escuro; blocos `bg--type-dark` permanecem escuros (não invertidos).

- **CAP-4 — Sincronia entre fonte `.css` e artefato `.min.css`**
  - **intent:** A barra carrega `dark-mode.min.css`; toda regra adicionada no `dark-mode.css` fonte é refletida no `.min.css` para ter efeito.
  - **success:** `dark-mode.css` e `dark-mode.min.css` são equivalentes (diff de conteúdo nulo após minificação); editar só a fonte sem regenerar o `.min` é detectável e tratado.

- **CAP-5 — Tema reusável e parametrizável por cliente**
  - **intent:** A solução é estruturada para que outro cliente adote dark mode copiando a pasta `css/{cliente}/` e ajustando a paleta, mantendo a mesma estratégia A+B (token-based + override de superfícies).
  - **success:** É possível instanciar o tema para um segundo cliente sem editar a B42 nem os bundles Rise — apenas criando/ajustando `css/{novo-cliente}/dark-mode(.min).css` e o atributo `data-dark-css`.

## Constraints

- **Sem hook na B42:** `data-mode="rise"` não ramifica a aplicação de tema (só injeta `<h1>` fallback; `params.mode` nunca é relido). O único ponto de extensão suportado é o CSS do tema. Patch JS no `b42-accessibility.min.js` (caminho C) é vendor compartilhado e está fora de escopo (ver Non-goals).
- **Escopo de aplicação = `#app`:** a classe `.dark-mode` é adicionada por `addTheme` ao container resolvido de `data-container="#app"`, não a `html`/`body`. Regras devem ser escopadas em `.dark-mode` (efetivo `#app.dark-mode` e descendentes).
- **`.min.css` é o arquivo carregado:** edições só na fonte `.css` não têm efeito; o par `.css`/`.min.css` precisa ser mantido em sincronia (sem build system no projeto → minificação manual).
- **`!important` obrigatório nos overrides de superfície:** as regras do Rise são `origin: regular` e vencem por ordem; o override do tema precisa de `!important` para superá-las.
- **Bundles Rise são vendor — não editar** (`content/lib/**`); atualizam por reexport, então nomes de classe/SHAs de superfície podem mudar (preferir tokens Arc como base resiliente e tratar overrides de classe como complemento auditável).
- **A variável de controle do Arc é "privada"** (`--arc•color•scheme`, separador U+2022, não hífen): não é sobrescrevível por nome com hífen; o controle suportado é o atributo `arc-scheme` ou a propriedade `color-scheme`.

## Non-goals

- **Não** patchar/editar o vendor `b42-accessibility.min.js` (caminho C / hook real em `data-mode="rise"`) — fica para necessidade futura comprovada.
- **Não** editar os bundles Rise em `content/lib/**` (corrigir no tema, não na fonte do Rise).
- **Não** introduzir build system, bundler, framework JS ou `package.json` para gerar o `.min.css` (projeto é estático).
- **Não** redesenhar a paleta de marca nem o design system; o objetivo é tornar o dark mode legível, reusando tokens onde possível.
- **Não** cobrir clientes Webflow neste spec (foco no app-shell Rise); a estratégia de reuso (CAP-5) é estrutural, não uma entrega de outro cliente aqui.

## Success signal

Um aluno abre qualquer Encontro do piloto Rise, ativa o Modo noturno na barra B42 e a lição inteira fica escura e legível — fundos de página e de blocos escuros, texto e títulos com contraste AA, tabelas/listas/citações/botões/blocos interativos coerentes, e nenhum bloco já-escuro invertido — sem nenhuma superfície branca residual e sem ter tocado no vendor da barra nem nos bundles do Rise.

## Open Questions

- Onde houver token Arc equivalente, a política deve preferir `var(--arc-color-*)` a hex fixo (menos manutenção, herda a marca) — confirmar como diretriz para CAP-2/CAP-5.
- Conteúdo sobre imagem (image `text overlay`, blocos com `backgroundType: IMAGE` e texto sobre foto, flashcards/labeled graphic com fundo de imagem): manter legibilidade como? Aplicar scrim/overlay escuro, deixar a imagem intacta, ou só garantir o contraste do texto? (afeta os ACs de "conteúdo sobre imagem" em `acceptance-criteria.md`).
