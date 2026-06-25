# HANDOFF — Dark mode Rise 360 (cliente mundo-aprendiz): preservar cartões "botao-dinamico"

> Cole este arquivo inteiro numa sessão nova para continuar o trabalho sem perder contexto.
> Estado: **CONCLUÍDO (2026-06-25)** — o item residual da seção 6 (borda branca no INTERAÇÃO) foi **resolvido**: alinhar o `color-scheme` do documento da casca (`sandbox.html`), não só dos aninhados, via `setDocScheme()` (inline + `<style>:root{color-scheme}` que força repaint). Validado ao vivo (INTERAÇÃO == ASSISTA). Tudo abaixo foi confirmado com evidência ao vivo (não são suposições).

---

## 0) Quem sou eu e como trabalhamos (IMPORTANTE — siga à risca)

- Me chame de **Rafael** em todas as respostas.
- **Quem valida no browser sou eu.** Você (provavelmente) não roda/inspeciona o navegador. NÃO me mande "abra o DevTools e teste". Quando precisar de evidência de runtime, me **entregue comandos prontos** pra eu colar no console do Chrome; eu te devolvo a saída. Trabalhamos em loop: você hipotetiza → me dá os comandos → eu reporto → você corrige.
- **NÃO assuma estrutura de DOM / valores computados.** Quando uma decisão depender disso, me peça a evidência ANTES. (O agente original errou implementando "às cegas".)
- Vá **direto ao ponto**. Sem bateria de testes automatizados — projeto estático, validação manual.
- Ao me pedir pra rodar script no console: lembre **(1)** `Ctrl+Shift+R` (hard reload — `css-applier.js` e `.min.css` ficam em cache), **(2)** dark mode **ON**, **(3)** dropdown de contexto do console em **`top`** (não num `sandbox.html`, senão tudo dá 0/false).

## 1) O problema (AC-14)

No piloto Rise, ao ligar o **Modo Noturno** da barra B42, os "cartões caixa de texto" decorativos (rótulos **ASSISTA / INTERAÇÃO / LEIA E OUÇA / OUÇA / ESTUDO DE CASO / LEIA / CALCULE / ATIVIDADES / ACESSE / ANALISE / ...**) quebravam: o fundo verde sumia (escurecia), a fonte clareava e os triângulos SVG das bordas ficavam "flutuando".

**Objetivo:** com dark ON, esses cartões específicos ficam **idênticos ao modo claro** (verde + fonte escura + bordas coerentes). O resto da página escurece normal.

**Sinal genérico e estável** = o cartão contém, em algum nível, um `<div class="botao-dinamico-container">`. NÃO é "todo iframe". Solução reusável por cliente (chavear pelo `.botao-dinamico-container`, nunca por texto/cor específica).

## 2) Stack e regras do projeto

- Estático, **sem build/bundler/package.json**. HTML/CSS/JS servido direto. Eu sirvo via **Live Server em `http://127.0.0.1:5500`** (`.../piloto-modulo-1-raw-SLa26liK/content/index.html`).
- Barra de acessibilidade **B42** (vendor) + pacote **Articulate Rise 360** (SPA; vendor em `content/lib/` — **NÃO editar**).
- Corrigir **preferencialmente** no tema do cliente `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/`.
- A barra `b42-accessibility.min.js` PODE ser editada só se inevitável (é **global a todos os clientes** — avise e mantenha aditivo/atrás de flag). **Hoje não foi tocada.**
- **NÃO** editar bundles Rise (`content/lib/**`). **NÃO** criar build system.

### Especificações BMAD (contrato canônico — LER PRIMEIRO, nesta ordem)

Todos confirmados existentes no repo. Leia nesta ordem antes de mexer em código:

1. `_bmad-output/project-context.md` — regras do projeto (o que pode/não pode tocar; stack/versões; anti-padrões).
2. `_bmad-output/specs/spec-dark-mode-rise/SPEC.md` — **kernel**: CAP-1..5, Constraints, Non-goals, Success signal, Open Questions.
3. `_bmad-output/specs/spec-dark-mode-rise/strategy.md` — estratégia **A+B**, cascata de tokens Arc (variável privada `--arc•color•scheme`, separador U+2022), paleta dark, reuso por cliente (CAP-5).
4. `_bmad-output/specs/spec-dark-mode-rise/pilot-blocks.md` — inventário dos tipos de bloco do piloto (famílias, `backgroundType`, etc.).
5. `_bmad-output/specs/spec-dark-mode-rise/acceptance-criteria.md` — ACs Given/When/Then (AC-1..13).
6. `_bmad-output/implementation-artifacts/spec-dark-mode-rise.md` — **spec quick-dev** (status `in-progress`); documenta a tentativa atual e o **AC-14** (cartões "botao-dinamico"). **← este é o que devo ATUALIZAR ao fechar** (Code Map / Tasks / Design Notes / AC-14).
7. `_bmad-output/implementation-artifacts/investigations/dark-mode-rise-sla26lik-investigation.md` — investigação de causa raiz (superfícies de cor fixa do app-shell).
8. `_bmad-output/planning-artifacts/research/technical-dark-mode-rise-arc-mondrian-hooks-b42-research-2026-06-24.md` — pesquisa técnica Arc/Mondrian + ausência de hook no `data-mode="rise"` da B42.

> ⚠️ Parte do conteúdo desses docs reflete o entendimento ANTERIOR (ex.: assumiam `.block-card`/`--color-background` e detecção rasa). Onde divergir da **seção 4 (arquitetura real confirmada)** deste handoff, **vale o handoff** — e o quick-dev (item 6) deve ser corrigido no fechamento.

## 3) Arquivos da solução

- FONTE do tema: `_BARRA-ACESSIBILIDADE-LOCAL/css/mundo-aprendiz/dark-mode.css`
- ARTEFATO carregado pela barra: `.../dark-mode.min.css` (**é o `.min` que carrega** — regenerar após editar a fonte: `cd` na pasta e `npx --yes csso-cli dark-mode.css -o dark-mode.min.css`, ou `cp dark-mode.css dark-mode.min.css`).
- Motor JS opt-in: `.../css-applier.js` (carregado direto, **não tem `.min`** — editar só este).
- Integração (só referência, NÃO editar): `piloto-modulo-1-raw-SLa26liK/content/index.html` — a barra está com `data-mode="rise" data-applier="true" data-dark-css="mundo-aprendiz" data-container="#app"`.
- Como a barra carrega o applier (`b42-accessibility.min.js`, ~linha 2390+): quando `theme==="dark"` E `data-applier="true"`, injeta UMA vez `css/mundo-aprendiz/css-applier.js` (regex troca o nome do `.css` por `css-applier.js`). URL confirmada correta.

## 4) Arquitetura REAL confirmada ao vivo (NÃO são suposições)

Decodifiquei o `runtime-data.js` (base64 dentro de `__jsonp("runtime-data.js","<b64>")`; há um JSON pronto em `piloto-modulo-1-raw-SLa26liK/content/runtimedata_base64_decoded.json`). Estrutura de um cartão (ex.: ASSISTA = itens 10–14 da lição 0):

| bloco | tipo (runtime) | fundo | papel |
|---|---|---|---|
| topo | `html/inline` | bgType **None** | borda SVG (polygon) |
| pílula | `html/inline` | bgType **COLOR** `#bedfcb` | card + `.botao-dinamico-container` (no iframe) |
| parágrafo | `text/paragraph` | bgType **COLOR** `#bedfcb` | texto |
| botão | `buttons/button` | bgType **COLOR** `#bedfcb` | botão ACESSAR |
| base | `html/inline` | bgType **None** | borda SVG (polygon) |

DOM renderizado (confirmado por `getComputedStyle` ao vivo):

- Cada bloco é `section.blocks-lesson > div.noOutline > div > div.block-wrapper.bg.bg--range-light.bg--type-color`.
- **NÃO existe `.block-card` neste DOM.** Quem pinta o fundo é a **`.block-wrapper`**, via `style="--color-background:#bedfcb; --color-background-contrast:#000; ..."` inline. (O `.noOutline` herda outra `--color-background` da lição — ignore-o.)
- Cards `COLOR` → classe `bg--type-color`; bordas/superfícies claras → `bg--type-light` (com `--color-background:#ffffff`).
- O que escurecia o verde = **a nossa própria regra do caminho A**: `.dark-mode .bg--range-light{background:var(--dm-block)!important}` (= `#2a2a2a`). A fonte clareava pelos overrides de texto do tema.
- O `.botao-dinamico-container` está num **iframe ANINHADO (profundidade 2)**: `iframe[data-rise-frontend-sandbox]` (`sandbox.html`, cujo `body` = `[script, iframe]`) → `iframe srcdoc` aninhado → `.botao-dinamico-container`. Tudo **same-origin** (`allow-same-origin`), `contentDocument` acessível (0 cross-origin sob HTTP).
- Os triângulos verdes das bordas são `fill` de `<polygon>` **dentro** do iframe (cor fixa, não muda no dark) — CSS do pai não alcança.
- **"iframe branco"**: NÃO é `background-color` (todos computam `transparent`; o wrapper já fica `#2a2a2a`). É o **canvas/backdrop que o Chromium pinta no iframe aninhado**, governado por `color-scheme`. Quando o iframe EXTERNO está `dark` e o ANINHADO `normal` → backdrop **opaco claro** (o branco). Quando batem (ex.: pílula preservada: externo `light` + aninhado `light`) → fica transparente e mostra o fundo do wrapper.

## 5) O que JÁ foi feito (estado atual dos arquivos — funcionando)

### `css-applier.js`
- `cardColor()` lê `--color-background` da **`.block-wrapper`** (não `.block-card`); retorna "" se não houver wrapper.
- Detecção **recursiva**: `docHasBotao(doc,depth)` / `frameHasBotao(frame)` descem pelos iframes aninhados até achar `.botao-dinamico-container`.
- `wireFrame(frame)`: observa `load` + DOM interno do iframe **e dos aninhados** (conteúdo chega tarde via postMessage→srcdoc); idempotente.
- Regra `keep-botao-panels`: usa `wireFrame` + `frameHasBotao`; marca com `.dm-keep-original` **só o cartão colorido contíguo** (pílula + parágrafo + botão, mesma `--color-background`). **NÃO marca as bordas SVG** de propósito (elas devem seguir o dark = `#2a2a2a`, triângulos flutuando no escuro). `markBotaoPanel` teve a extensão `hasFrame` (que incluía as bordas) **removida**.
- Regra nova `sync-iframe-canvas-scheme` (roda após `keep-botao-panels`): para cada `iframe[data-rise-frontend-sandbox]`, define o `color-scheme` do iframe **aninhado** (`elemento` + `documentElement`) = `light` se o bloco está em `.dm-keep-original`, senão `dark`. Isso elimina o mismatch que pintava o canvas branco.

### `dark-mode.css` (+ `.min` regenerado e em sincronia)
Seção "PAINEIS PRESERVADOS" (`.dark-mode .dm-keep-original ...`):
- `color-scheme: light !important` no subtree.
- Fundo: `.dm-keep-original .block-wrapper { background-color: var(--color-background) !important; border-color: var(--color-border, transparent) !important }` (3 classes vencem o caminho A de 2 classes).
- Iframe: `.dm-keep-original iframe { background: transparent !important }`.
- Texto: `.dm-keep-original .block-wrapper / .rise-tiptap / .rise-tiptap * / .block-list ... { color: var(--color-background-contrast, var(--color-text)) !important }` (= `#000`, a cor de contraste que o Rise calculou pro claro).
- Links: `.dm-keep-original a { color: var(--color-theme, var(--color-background-contrast)) !important }`.
- Botão ACESSAR (texto branco, senão fica ilegível sobre o teal): `.dm-keep-original .blocks-button, .dm-keep-original .blocks-button * { color: var(--dm-white) !important }`.

### Validação que JÁ passou (dark ON, contexto top)
- 3 cartões detectados; `.dm-keep-original` > 0; blocos do cartão: `keep=true`, `wrapper.bg=rgb(190,223,203)` (#bedfcb), parágrafo `color=rgb(0,0,0)`, botão `color=rgb(255,255,255)`; bordas `keep=false`, `wrapper.bg=rgb(42,42,42)`.
- CURIOSIDADE (bloco `html` `#65bc95`, **sem** `.botao-dinamico-container`, badge lupa com texto `--cor-texto:#ededed`): agora `aninhado html.cs=dark` → fundo escuro, badge legível. ✅
- Pílula: `externo.cs=light`, `aninhado html.cs=light` → mostra o verde. ✅

## 6) ITEM RESIDUAL — ✅ RESOLVIDO (2026-06-25)

> **Fechado.** Causa real (confirmada ao vivo): ASSISTA e INTERAÇÃO tinham computed style **byte-a-byte idêntico**, mas o **documento da casca** (`sandbox.html`) ficava com `color-scheme: normal` — a regra `sync-iframe-canvas-scheme` só alinhava os iframes **aninhados**, nunca a casca. Com o externo `dark`, o Chromium pinta o canvas da casca de branco; o INTERAÇÃO (mais abaixo) ficava com o branco **"preso"**, o ASSISTA (topo) repintava por timing — **não era diferença estrutural nem solução tailored**. Fix em `css-applier.js`: helper `setDocScheme()` alinha o `color-scheme` da casca **e** dos aninhados, por inline **+ `<style>:root{color-scheme}` injetado** (a inserção de stylesheet força o repaint que o inline sozinho não disparava). Validado: `CASCA.doc html.cs=dark` + `<style>` presente nas duas camadas; INTERAÇÃO == ASSISTA. _Histórico abaixo, para contexto._
>
> **Adendos (2026-06-25, mesma entrega):**
> - **`keep-color-cards` (generaliza a preservação):** o `.botao-dinamico-container` não é universal — o **ATIVIDADES** é o mesmo cartão verde (`bg--type-color #bedfcb`) mas o iframe dele não tem o container. Novo sinal genérico = **cartão pintado pelo autor** (`bg--type-color` + cor autoral via `isAuthorColor`), em `css-applier.js`. Pega ATIVIDADES e qualquer cartão colorido, com ou sem o container. Não toca bordas (`bg--type-image/light`) nem `bg--type-dark`.
> - **Polish dark (AC-15) em `dark-mode.css`/`.min`:** rótulo de botão (`.blocks-button__button` → `var(--color-button-text,--dm-white)`, mata o azul `--dm-link`), HOME/nav de lição (`.lesson-nav-link__link` → branco), ícone "+" de accordion (`.blocks-accordion .svg-inline--fa` → branco), linha da timeline (`.timeline__card-wrapper::after` → `var(--color-theme)`).

**Sintoma (original):** no cartão **INTERAÇÃO**, a **borda SVG do topo** aparece com fundo **BRANCO**, enquanto no cartão **ASSISTA** a mesma borda aparece **ESCURA** (correto). Os dois cartões têm **estrutura idêntica** (confirmado no runtime-data: ASSISTA itens 10–14, INTERAÇÃO itens 25–29; mesmas classes/tipos). Logo NÃO é diferença estrutural.

**Hipótese principal (a confirmar com evidência, não assumir):** é **timing/re-aplicação** da regra `sync-iframe-canvas-scheme` no iframe da borda do INTERAÇÃO — o iframe aninhado da borda carregou/re-renderizou depois do último `runAll`, e o `color-scheme:dark` não foi (re)aplicado naquele instante. (ASSISTA pegou; INTERAÇÃO não, no momento do print.)

**Próximo passo sugerido (entregar ao Rafael pra rodar):** um script que localize a borda do topo do INTERAÇÃO e meça, no iframe ANINHADO da borda, `documentElement` `color-scheme` + `background-color`, comparando com a borda do ASSISTA. Se a do INTERAÇÃO estiver `cs=normal`/branca, é confirmação de timing → endurecer a re-aplicação (ex.: observar `load` do iframe aninhado e re-rodar a regra; ou setar o `color-scheme` também no `<body>` do aninhado; ou, como reforço determinístico, injetar via `contentDocument` um `<style>` `html,body{color-scheme:dark}` nos iframes não-preservados). Validar com print.

**Objetivo final:** INTERAÇÃO == ASSISTA (borda do topo escura).

## 7) Scripts de diagnóstico prontos (cole no console; dark ON; contexto top)

### A) Visão geral do cartão (marcação + cores + bordas)
```js
(() => {
  if (window.top !== window.self) { console.log('⚠️ Console num IFRAME. Troque o contexto para "top".'); return; }
  const L=[]; const p=(...a)=>L.push(a.join(' '));
  const cs=(el,pr)=>{try{return getComputedStyle(el).getPropertyValue(pr).trim();}catch(e){return '?';}};
  const fdoc=f=>{try{return f.contentDocument||null;}catch(e){return null;}};
  function deep(doc,d){if(!doc||d<0)return false;try{if(doc.querySelector('.botao-dinamico-container'))return true;}catch(e){}let inr=[];try{inr=doc.querySelectorAll('iframe');}catch(e){return false;}for(const f of inr)if(deep(fdoc(f),d-1))return true;return false;}
  p('dark ativo:', !!document.querySelector('#app.dark-mode'), '| .dm-keep-original:', document.querySelectorAll('.dm-keep-original').length);
  const tops=[...document.querySelectorAll('iframe[data-rise-frontend-sandbox]')].filter(f=>deep(fdoc(f),3));
  p('cartoes botao detectados:', tops.length);
  if(!tops.length){console.log(L.join('\n'));return;}
  const f=tops[0]; const lesson=f.closest('.blocks-lesson');
  let block=f;{let n=f;while(n&&n.parentElement&&n.parentElement!==lesson)n=n.parentElement;block=(n&&n.parentElement===lesson)?n:null;}
  const sibs=[...lesson.children]; const idx=sibs.indexOf(block);
  for(let k=Math.max(0,idx-2);k<=Math.min(sibs.length-1,idx+3);k++){
    const s=sibs[k]; const w=s.querySelector('.block-wrapper'); const btn=s.querySelector('.blocks-button button, .blocks-button a');
    p('['+(k-idx)+'] keep='+s.classList.contains('dm-keep-original')+' | wrapper.bg='+(w?cs(w,'background-color'):'-')+' | color='+(w?cs(w,'color'):'-')+(btn?(' | BTN='+cs(btn,'color')):'')+' | iframe?='+!!s.querySelector('iframe'));
  }
  console.log(L.join('\n'));
})();
```

### B) Comparar canvas dos iframes aninhados (pílula vs CURIOSIDADE / qualquer sinal)
```js
(() => {
  const L=[]; const p=(...a)=>L.push(a.join(' '));
  const cs=(el,pr)=>{try{return getComputedStyle(el).getPropertyValue(pr).trim();}catch(e){return '?';}};
  const fdoc=f=>{try{return f.contentDocument||null;}catch(e){return null;}};
  function deepFind(doc,sel,d){ if(!doc||d<0)return null; try{if(doc.querySelector(sel))return doc;}catch(e){} let inr=[];try{inr=doc.querySelectorAll('iframe');}catch(e){return null;} for(const f of inr){const r=deepFind(fdoc(f),sel,d-1); if(r)return r;} return null; }
  function topWith(sel){ return [...document.querySelectorAll('iframe[data-rise-frontend-sandbox]')].filter(f=>deepFind(fdoc(f),sel,4)); }
  function report(label, sel){
    const tops=topWith(sel); p('\n### '+label+' ('+tops.length+')'); if(!tops.length) return;
    const f=tops[0]; const lesson=f.closest('.blocks-lesson');
    let block=f;{let n=f;while(n&&n.parentElement&&n.parentElement!==lesson)n=n.parentElement;block=(n&&n.parentElement===lesson)?n:null;}
    p(' keep='+(block?block.classList.contains('dm-keep-original'):'?')+' | externo.cs='+cs(f,'color-scheme'));
    const od=fdoc(f); const inner=od?od.querySelector('iframe'):null; const id=inner?fdoc(inner):null;
    p(' ANINHADO: elem.cs='+(inner?cs(inner,'color-scheme'):'-')+' | html.cs='+(id?cs(id.documentElement,'color-scheme'):'-')+' | html.bg='+(id?cs(id.documentElement,'background-color'):'-'));
  }
  report('PILULA (deve ser light)', '.botao-dinamico-container');
  report('CURIOSIDADE (deve ser dark)', '.container-curiosidade');
  console.log(L.join('\n'));
})();
```

## 8) Restrições/regras de fechamento

- NÃO inverter blocos já escuros (`bg--type-dark`).
- Manter o gatilho genérico `.botao-dinamico-container` (não cor/texto).
- `.css` ↔ `.min.css` sempre em sincronia (o `.min` é o carregado).
- Ao terminar, atualizar `_bmad-output/implementation-artifacts/spec-dark-mode-rise.md` (Code Map / Tasks / Design Notes / AC-14) com o que foi efetivamente feito — em especial: alvo real é **`.block-wrapper`** (não `.block-card`); detecção é **recursiva** (iframe aninhado depth 2); o "iframe branco" é **canvas/color-scheme**, resolvido pela regra `sync-iframe-canvas-scheme`.
