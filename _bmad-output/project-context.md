---
project_name: 'root_folder'
user_name: 'Rafael'
date: '2026-06-24'
sections_completed:
  - technology_stack
  - language_specific
  - framework_specific
  - testing
  - code_quality
  - workflow
  - anti_patterns
status: 'complete'
rule_count: 72
optimized_for_llm: true
---

# Project Context for AI Agents

_Este arquivo contém regras e padrões críticos que agentes de IA devem seguir ao implementar código neste projeto. Foco em detalhes não óbvios que agentes poderiam ignorar._

---

## Technology Stack & Versions

| Componente | Versão / Detalhe |
|---|---|
| **B42 Acessibilidade** | v2.0.29 (`_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js`) |
| **Webflow** | Export estático (publicado Jun/2026) — `sistemas-hidraulicos-pneumaticos.webflow/` |
| **Articulate Rise 360** | Pacote `SLa26liK` — `piloto-modulo-1-raw-SLa26liK/` |
| **Rise frontend** | SHA `35da8bfa` (bundles em `content/lib/rise/`) |
| **Learn distribution** | SHA `3cc01a28` (`content/lib/learn_dist/`) |
| **Mondrian** | SHA `07011da2` (`content/lib/mondrian/`) |
| **SCORM** | `scormfunctions.js` + `scormvalidate.js` (Webflow) |
| **MathJax** | 2.7.5 (CDN cdnjs) |
| **MediaElement Player** | CDN `assets.b42.com.br/player/` |
| **B42 Audio Player** | CDN `assets.eadstock.com.br/go/static/libs/b42-audio-player/` |
| **BMAD Method** | v6.9.0 (`_bmad/`) |

**Notas de compatibilidade:**
- Sem `package.json` nem build system — tudo é HTML/CSS/JS estático servido diretamente
- Barra local (`_BARRA-ACESSIBILIDADE-LOCAL/`) para PoC; produção usa CDN `assets.eadstock.com.br/go/static/libs/b42-accessibility/`
- Bundles Rise em `content/lib/` são vendor — não editar
- Temas CSS da barra ficam em `css/{cliente}/` (ex.: `unipar`, `mundo-aprendiz`)

## Critical Implementation Rules

### Language-Specific Rules

**HTML:**
- Inserir a barra B42 via `<script>` no final do `<body>`, após o conteúdo principal
- Calcular caminho relativo para `_BARRA-ACESSIBILIDADE-LOCAL/` conforme profundidade do HTML (ex.: `../` na raiz Webflow, `../../` em `content/index.html` do Rise)
- Usar `.texto-acessibilidade` para conteúdo exclusivo de leitores de tela (off-screen: `position:absolute; top:-500px; width:1px; height:1px; overflow:hidden`)
- Preservar atributos Webflow (`data-w-id`, `data-wf-page`, classes `w-*`) — não remover nem renomear
- Comentários explicativos em português nos pontos de integração customizada

**JavaScript:**
- `"use strict"` no script da barra — manter ao editar `b42-accessibility.min.js`
- A barra resolve assets via `document.currentScript` — o `<script>` deve ter `src` explícito (não injetar dinamicamente)
- Modo Rise: `data-mode="rise"` injeta `<h1>` fallback antes do init — não duplicar manualmente
- Não adicionar frameworks JS (React, Vue, etc.) — o projeto é estático sem bundler
- SCORM: chamar `doStart(false)` em `window.addEventListener('load', ...)` nas páginas Webflow

**CSS:**
- Temas por cliente em `_BARRA-ACESSIBILIDADE-LOCAL/css/{cliente}/` — arquivos: `dark-mode`, `contrast-mode`, `print`, `additional`
- Preferir arquivos `.min.css` para produção; `.css` não-minificado existe em alguns clientes (ex.: `lsb-lodges`)
- Snippets globais Webflow ficam em `<div class="global-styles w-embed">` dentro do `<body>`
- Ocultar badge Webflow: `.w-webflow-badge { display: none !important; }`

### Framework-Specific Rules

**Webflow (export estático):**
- Páginas de aula: `aula-NN.html` na raiz do export; subpastas usam caminho relativo (`../js/`, `../_BARRA-ACESSIBILIDADE-LOCAL/`)
- Integração da barra (PoC local):
  ```html
  <script src="../_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js"
    data-print-css="unipar" data-dark-css="unipar" data-contrast-css="unipar"></script>
  ```
- Produção usa CDN sem `data-mode`: `https://assets.eadstock.com.br/go/static/libs/b42-accessibility/b42-accessibility.min.js`
- Rich text: conteúdo editorial em `<div class="w-richtext">` — a barra opera sobre esse markup
- Animações/interações: atributos `data-w-id` controlados pelo `webflow.js` — não alterar IDs de interação
- SCORM obrigatório: incluir `scormfunctions.js`, `scormvalidate.js` e `doStart(false)` no load

**Articulate Rise 360 (SPA):**
- Ponto de integração único: `content/index.html` — não espalhar script em outros arquivos
- Integração da barra:
  ```html
  <script src="../../_BARRA-ACESSIBILIDADE-LOCAL/b42-accessibility.min.js"
    data-mode="rise" data-remove-pdf="true"
    data-print-css="mundo-aprendiz" data-dark-css="mundo-aprendiz" data-contrast-css="mundo-aprendiz"></script>
  ```
- `data-mode="rise"`: obrigatório — adapta barra para SPA (injeta `<h1>` fallback, observa DOM dinâmico)
- `data-remove-pdf="true"`: remove botão PDF/impressão (padrão Rise)
- Não editar `content/lib/**` — reexportar pacote Rise para atualizar bundles
- Metadados de versão nos comentários do `index.html` (package version, SHAs dos frontends)

**B42 Acessibilidade (barra):**
- `data-print-css`, `data-dark-css`, `data-contrast-css`: nome da pasta do cliente em `css/` (sem extensão)
- Script descobre pasta própria via `document.currentScript` — imagens/css/vendors carregam relativos a `_BARRA-ACESSIBILIDADE-LOCAL/`
- Novo cliente: copiar pasta de tema existente em `css/` e ajustar variáveis de cor/contraste
- Versão atual: 2.0.29 — manter header de versão ao editar o `.min.js`

### Testing Rules

**Sem testes automatizados** — validação manual no browser.

**Checklist obrigatório após integração da barra:**
1. Abrir página via servidor local (não `file://` — SCORM e CORS podem falhar)
2. Verificar carregamento da barra (ícone engrenagem visível, `accesskey="4"`)
3. Testar modos: alto contraste, modo escuro, aumento de fonte, leitor em linha
4. Confirmar que CSS do tema correto carrega (sem 404 em `css/{cliente}/`)
5. Rise: navegar entre lições e confirmar que a barra persiste e o `<h1>` fallback funciona
6. Webflow: confirmar que SCORM inicializa (`doStart` sem erros no console)
7. Mobile (≤500px): ícone da barra muda para `arrow-barrinha.svg`

**Validação de acessibilidade:**
- Conteúdo `.texto-acessibilidade` onde há texto visual sem equivalente semântico
- Testar com leitor de tela (NVDA/VoiceOver) nos pontos de integração novos
- Verificar contraste nos modos `dark-mode` e `contrast-mode` do tema do cliente

**O que NÃO fazer:**
- Não criar testes unitários para bundles vendor Rise (`content/lib/`)
- Não adicionar dependências de teste sem aprovação
- Não considerar "pronto" sem testar Webflow e Rise quando a mudança afeta a barra

### Code Quality & Style Rules

**Organização de arquivos:**
- `_BARRA-ACESSIBILIDADE-LOCAL/` — barra compartilhada (raiz do repo)
- `sistemas-hidraulicos-pneumaticos.webflow/` — export Webflow por curso/cliente
- `piloto-modulo-1-raw-{ID}/` — export Rise por módulo
- `_bmad-output/` — artefatos BMAD; `docs/` — documentação do projeto

**Convenções de nomenclatura:**
- HTML Webflow: `aula-NN.html`, `check-in.html`, `search.html` (kebab-case)
- Temas CSS: pasta kebab-case do cliente (`mundo-aprendiz`, `unipar`, `lsb-lodges`)
- Arquivos de tema: `dark-mode`, `contrast-mode`, `print`, `additional` (+ `.min.css`)
- Classes: prefixo `b42-` (barra), `.texto-acessibilidade` (off-screen), prefixo `w-` (Webflow — não renomear)

**Formatação e edição:**
- Sem ESLint/Prettier — seguir estilo existente no arquivo editado
- Arquivos `.min.js`/`.min.css`: evitar edição direta; preservar header de versão se necessário
- HTML Webflow: indentação com 2 espaços; comentários em português nas integrações customizadas

### Development Workflow Rules

**Git:**
- Commits em português, mensagens curtas e descritivas
- Não commitar sem solicitação explícita; não fazer force push em `main`/`master`

**Escopo de mudanças:**
- Mudanças na barra afetam todos os clientes — testar Webflow e Rise
- Webflow: reexportar quando possível; edições manuais só em integrações
- Rise: editar apenas `content/index.html`; reexportar para atualizar `content/lib/`
- PoC local: `_BARRA-ACESSIBILIDADE-LOCAL/`; produção: CDN `assets.eadstock.com.br`

**Deploy/serving:**
- Servir via HTTP local — não abrir via `file://`
- Atualizar `src` do `<script>` em todas as páginas ao trocar CDN ↔ local

### Critical Don't-Miss Rules

**Anti-padrões (NUNCA fazer):**
- Editar bundles vendor em `piloto-modulo-1-raw-*/content/lib/`
- Injetar barra B42 via JS dinâmico — `document.currentScript` exige `<script src="...">` estático
- Usar `data-mode="rise"` em Webflow; esquecer `data-mode="rise"` no Rise
- Caminho relativo errado para `_BARRA-ACESSIBILIDADE-LOCAL/` — causa 404 silencioso
- Remover scripts SCORM das páginas Webflow
- Adicionar `package.json`, bundler ou framework JS

**Edge cases críticos:**
- Rise renderiza conteúdo após load — barra trata com `data-mode="rise"` e `<h1>` fallback
- Profundidade de pasta muda caminho relativo (raiz Webflow `../`, Rise `../../`)
- Tema CSS inexistente em `css/{cliente}/` — modos visuais ficam quebrados
- `runtime-data.js` do Rise (~2.5MB) — nunca incluir inline no HTML

---

## Usage Guidelines

**Para agentes de IA:**
- Ler este arquivo antes de implementar qualquer código
- Seguir TODAS as regras exatamente como documentado
- Em caso de dúvida, preferir a opção mais restritiva
- Atualizar este arquivo se novos padrões surgirem

**Para humanos:**
- Manter o arquivo enxuto e focado nas necessidades dos agentes
- Atualizar quando a stack tecnológica mudar
- Revisar trimestralmente regras desatualizadas
- Remover regras que se tornem óbvias com o tempo

Last Updated: 2026-06-24
