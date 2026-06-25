/**
 * mundo-aprendiz — css-applier.js
 * ===========================================================================
 * Motor auxiliar GENERICO de tema. Carregado de forma OPT-IN pela barra B42
 * quando o <script> da barra tem data-applier="true" (clientes sem a flag nao
 * sao afetados). Serve para aplicar QUALQUER ajuste de CSS de dark mode que o
 * .css estatico nao resolva sozinho — nao so o "reflita".
 *
 * COMO FUNCIONA
 *   - Ha um REGISTRO de regras (array RULES). Cada regra e { name, run }.
 *   - run() pode fazer 3 coisas (use o helper que precisar):
 *       1) injectCss(id, css)            -> escreve CSS direto do JS (o jeito
 *                                           mais livre: voce escreve a regra
 *                                           CSS inteira aqui, sem tocar o .css)
 *       2) markMatching(sel, classe)     -> adiciona uma classe aos elementos
 *          markRangeBetween(a,b,classe)     (e o dark-mode.css pinta a classe)
 *       3) applyStyle(sel, props)        -> estilo inline direto no elemento
 *                                           (use quando precisar de JS/calculo)
 *   - O motor roda todas as regras no load e re-roda quando o SPA do Rise
 *     troca de licao (MutationObserver, com debounce). Regras devem ser
 *     IDEMPOTENTES (rodam varias vezes sem efeito colateral) — os 3 helpers
 *     ja sao idempotentes.
 *
 * COMO ADICIONAR UMA MODIFICACAO  (so mexa no array RULES):
 *   // (1) escrevendo CSS direto:
 *   { name: "meu-css", run: function () {
 *       injectCss("meu-css", '.dark-mode .foo{color:var(--dm-white)!important}');
 *   }}
 *   // (2) marcando classe (e pintando no dark-mode.css):
 *   { name: "marca", run: function () { markMatching('.foo', 'dm-foo'); } }
 *   // (3) estilo inline (ultimo caso):
 *   { name: "inline", run: function () { applyStyle('.foo', {color:'#fff'}); } }
 *
 * OBS: escope seu CSS/estilo em `.dark-mode ...` para so valer no modo escuro
 * (todo o tema e .dark-mode-scoped). As cores --dm-* vivem no dark-mode.css.
 * ===========================================================================
 */
(function () {
  "use strict";

  /* =====================================================================
   * HELPERS — use-os dentro do run() das regras.
   * =================================================================== */

  // (1) Escreve/atualiza um bloco <style data-applier="id"> no <head>.
  //     Idempotente: reusa o mesmo <style> por id e so atualiza se mudou.
  function injectCss(id, cssText) {
    var styleId = "dm-applier-style-" + id;
    var el = document.getElementById(styleId);
    if (!el) {
      el = document.createElement("style");
      el.id = styleId;
      el.setAttribute("data-applier", id);
      document.head.appendChild(el);
    }
    if (el.textContent !== cssText) {
      el.textContent = cssText;
    }
  }

  // (3) Aplica estilo inline nos elementos que casam (idempotente).
  //     props: { propCss: valor } — ex.: { color: "#fff", filter: "none" }.
  function applyStyle(selector, props) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      for (var k in props) {
        if (Object.prototype.hasOwnProperty.call(props, k)) {
          // "important" para vencer regras do Rise, igual ao resto do tema.
          els[i].style.setProperty(k, props[k], "important");
        }
      }
    }
  }

  // (2a) Marca todo elemento que casa com `selector` (idempotente).
  function markMatching(selector, className) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add(className);
    }
  }

  function ancestorChain(el) {
    var chain = [];
    while (el) {
      chain.push(el);
      el = el.parentElement;
    }
    return chain;
  }

  // Par (ancestral-do-topo, ancestral-da-base) mais raso em que ambos sao
  // irmaos sob o mesmo pai = o nivel de "bloco" do Rise. Generico: funciona
  // mesmo com wrappers/grupos intermediarios, sem depender de nomes de classe.
  function siblingBlockPair(topNode, bottomNode) {
    var topChain = ancestorChain(topNode);
    var bottomChain = ancestorChain(bottomNode);
    for (var i = topChain.length - 1; i >= 0; i--) {
      var a = topChain[i];
      if (!a.parentElement) continue;
      for (var j = bottomChain.length - 1; j >= 0; j--) {
        var b = bottomChain[j];
        if (a !== b && a.parentElement === b.parentElement) {
          return [a, b];
        }
      }
    }
    return null;
  }

  // (2b) Marca os blocos do intervalo entre cada par (topSel, botSel) —
  //      inclusive os marcadores. Suporta multiplas secoes (pareia em ordem).
  function markRangeBetween(topSel, botSel, className) {
    var tops = document.querySelectorAll(topSel);
    var bottoms = document.querySelectorAll(botSel);
    var count = Math.min(tops.length, bottoms.length);
    for (var k = 0; k < count; k++) {
      var pair = siblingBlockPair(tops[k], bottoms[k]);
      if (!pair) continue;
      var node = pair[0];
      var end = pair[1];
      var guard = 0;
      while (node && guard++ < 500) {
        node.classList.add(className);
        if (node === end) break;
        node = node.nextElementSibling;
      }
    }
  }

  /* =====================================================================
   * HELPERS p/ conteudo dentro de IFRAME (blocos "html" do Rise).
   * O Rise renderiza blocos html num iframe de sandbox (mesma origem:
   * src=lib/sandbox/sandbox.html, sandbox="... allow-same-origin ...") e
   * injeta o HTML do bloco via postMessage. Logo, da pra LER o conteudo
   * (contentDocument) e reagir a ele.
   * =================================================================== */

  // Acesso seguro ao documento de um iframe (null se nao acessivel).
  function frameDoc(frame) {
    try {
      return frame.contentDocument || null;
    } catch (e) {
      return null;
    }
  }

  // Bloco de nivel de lista do Rise = filho direto de .blocks-lesson
  // (irmao dos demais blocos). E o nivel onde caminhamos antes/depois.
  function blockNodeOf(el) {
    var list = el.closest ? el.closest(".blocks-lesson") : null;
    if (!list) return null;
    var n = el;
    while (n && n.parentElement && n.parentElement !== list) {
      n = n.parentElement;
    }
    return n && n.parentElement === list ? n : null;
  }

  // Cor de fundo AUTORAL do bloco. Quem pinta o fundo e a .block-wrapper
  // (NAO ha .block-card neste DOM): ela carrega --color-background inline
  // (ex.: #bedfcb num cartao COLOR, #ffffff num bloco LIGHT). Sem wrapper,
  // nao ha cor autoral confiavel — o proprio .noOutline herda outra var
  // (--color-background da licao), entao retornamos "" para nao envenenar
  // a comparacao de cor contigua.
  function cardColor(blockNode) {
    if (!blockNode || !blockNode.querySelector) return "";
    var wrap = blockNode.querySelector(".block-wrapper");
    if (!wrap) return "";
    var v = "";
    try {
      v = getComputedStyle(wrap).getPropertyValue("--color-background");
    } catch (e) {}
    return (v || "").trim().toLowerCase();
  }

  // Cor "real" = nao vazia, nao branca, nao transparente (default do Rise).
  function isAuthorColor(v) {
    if (!v) return false;
    if (v === "#fff" || v === "#ffffff" || v === "white") return false;
    if (v === "transparent") return false;
    if (v.indexOf("rgba(0, 0, 0, 0)") === 0) return false;
    if (v.indexOf("rgba(255, 255, 255") === 0) return false;
    return true;
  }

  // Marca o PAINEL do botao-dinamico (a partir do iframe que o contem):
  // SO o cartao colorido em si = blocos contiguos de MESMA cor autoral
  // (pilula + paragrafo + botao, todos bg--type-color #bedfcb).
  //
  // NAO estendemos para os blocos de borda SVG (bg--type-light) de proposito:
  // eles devem seguir o dark normal (caminho A -> #2a2a2a) para que os
  // triangulos verdes "flutuem" sobre o fundo escuro da pagina, igual ao
  // comportamento desejado. Marca-los devolveria o fundo claro (#fff) do
  // bloco, criando uma faixa branca atras dos triangulos.
  // Marca o bloco dado + os blocos contiguos de MESMA cor autoral (dos dois
  // lados) com className. Sem cor autoral, marca so o bloco. Compartilhado
  // pelos cartoes "botao-dinamico" (entrada via iframe) e pelos cartoes
  // detectados so pela cor (ex.: ATIVIDADES, sem .botao-dinamico-container).
  function markContiguousColor(block, className) {
    if (!block) return;
    var start = block;
    var end = block;
    var color = cardColor(block);
    if (isAuthorColor(color)) {
      var p = start.previousElementSibling;
      while (p && cardColor(p) === color) {
        start = p;
        p = p.previousElementSibling;
      }
      var n = end.nextElementSibling;
      while (n && cardColor(n) === color) {
        end = n;
        n = n.nextElementSibling;
      }
    }

    var node = start;
    var guard = 0;
    while (node && guard++ < 50) {
      node.classList.add(className);
      if (node === end) break;
      node = node.nextElementSibling;
    }
  }

  function markBotaoPanel(frame, className) {
    markContiguousColor(blockNodeOf(frame), className);
  }

  // iframes ja "fiados" (load listener) — evita registrar duas vezes.
  var wiredFrames = typeof WeakSet !== "undefined" ? new WeakSet() : null;

  // Procura .botao-dinamico-container no doc E nos iframes ANINHADOS.
  // ATENCAO (confirmado ao vivo): o sandbox.html do Rise NAO renderiza o bloco
  // no proprio documento — a casca tem so [script, iframe] e o conteudo (com o
  // .botao-dinamico-container) vive num iframe srcdoc ANINHADO (profundidade 2).
  // Por isso a deteccao precisa descer recursivamente (nao basta o doc da casca).
  function docHasBotao(doc, depth) {
    if (!doc || depth < 0) return false;
    try {
      if (doc.querySelector(".botao-dinamico-container")) return true;
    } catch (e) {}
    var inner;
    try {
      inner = doc.querySelectorAll("iframe");
    } catch (e) {
      return false;
    }
    for (var i = 0; i < inner.length; i++) {
      if (docHasBotao(frameDoc(inner[i]), depth - 1)) return true;
    }
    return false;
  }

  function frameHasBotao(frame) {
    return docHasBotao(frameDoc(frame), 3);
  }

  // Liga os observers no iframe e em TODOS os aninhados, para re-rodar quando o
  // conteudo do bloco for injetado/carregado (postMessage -> iframe srcdoc).
  // Idempotente (wiredFrames + flag __dmObserved por documento).
  function wireFrame(frame) {
    if (wiredFrames && !wiredFrames.has(frame)) {
      wiredFrames.add(frame);
      frame.addEventListener("load", schedule);
    }
    var doc = frameDoc(frame);
    if (
      doc &&
      !doc.__dmObserved &&
      doc.body &&
      typeof MutationObserver !== "undefined"
    ) {
      doc.__dmObserved = true;
      try {
        new MutationObserver(schedule).observe(doc.body, {
          childList: true,
          subtree: true,
        });
      } catch (e) {}
    }
    if (doc) {
      var inner;
      try {
        inner = doc.querySelectorAll("iframe");
      } catch (e) {
        inner = [];
      }
      for (var i = 0; i < inner.length; i++) wireFrame(inner[i]);
    }
  }

  // Alinha o color-scheme de um documento de iframe (mesma origem) ao destino,
  // de forma DETERMINISTICA e idempotente. Faz por DOIS caminhos porque setar
  // so o inline no <html> nem sempre forca o Chromium a REPINTAR o canvas ja
  // pintado (era por isso que a borda do INTERACAO ficava com branco "preso"
  // mesmo a regra tendo rodado; o ASSISTA, no topo, repintava por timing):
  //   1) inline color-scheme no <html>;
  //   2) um <style> proprio (:root{color-scheme}) no <head> — a insercao de
  //      stylesheet dispara recalc/repaint, garantindo que o canvas atualize.
  // Idempotente: reusa o mesmo <style> por id e so atualiza se o valor mudou.
  function setDocScheme(doc, scheme) {
    if (!doc || !doc.documentElement) return;
    try {
      doc.documentElement.style.setProperty("color-scheme", scheme);
    } catch (e) {}
    try {
      var el = doc.getElementById("dm-applier-cs");
      if (!el) {
        el = doc.createElement("style");
        el.id = "dm-applier-cs";
        (doc.head || doc.documentElement).appendChild(el);
      }
      var css = ":root{color-scheme:" + scheme + "}";
      if (el.textContent !== css) el.textContent = css;
    } catch (e) {}
  }

  /* =====================================================================
   * REGISTRO DE REGRAS  — adicione suas modificacoes aqui.
   * =================================================================== */
  var RULES = [
    {
      // Texto branco nos blocos entre reflita-img.png e reflita-baixo.png.
      // (a inversao das imagens-marcador esta no dark-mode.css, por src.)
      name: "reflita-range",
      run: function () {
        markRangeBetween(
          'img[src*="reflita-img"]',
          'img[src*="reflita-baixo"]',
          "dm-reflita"
        );
      },
    },

    {
      // PAINEIS "botao-dinamico" (iframe "caixa de texto" envolto por SVGs):
      // devem manter o visual do MODO CLARO mesmo em dark.
      // Sinal GENERICO e estavel = o iframe contem .botao-dinamico-container.
      // (NAO e qualquer iframe — outros iframes sao tratados caso a caso.)
      // Marca o cartao + o SVG de borda antes/depois com .dm-keep-original;
      // o dark-mode.css devolve fundo (--color-background) e texto
      // (--color-text) autorais. Como o conteudo vive dentro do iframe (e
      // injetado por postMessage apos o load), tambem observamos o load e o
      // DOM interno de cada iframe para re-rodar quando o conteudo aparecer.
      name: "keep-botao-panels",
      run: function () {
        var frames = document.querySelectorAll(
          "iframe[data-rise-frontend-sandbox]"
        );
        if (!frames.length) frames = document.querySelectorAll("iframe");
        for (var i = 0; i < frames.length; i++) {
          var frame = frames[i];

          // Observa load + DOM interno do iframe E dos aninhados (o conteudo
          // chega tarde via postMessage -> srcdoc), para re-rodar quando vier.
          wireFrame(frame);

          // Sinal = .botao-dinamico-container em QUALQUER profundidade (o Rise
          // o renderiza num iframe srcdoc aninhado, nao no doc da casca). Marca
          // o iframe de TOPO, que e o irmao de bloco em .blocks-lesson.
          if (frameHasBotao(frame)) {
            markBotaoPanel(frame, "dm-keep-original");
          }
        }
      },
    },

    {
      // CARTOES COLORIDOS PELO AUTOR (generico — complementa keep-botao-panels).
      // Sinal estavel: bloco bg--type-color com COR AUTORAL (--color-background
      // != branco/transparente). Sao as "caixas de texto" que o autor pintou de
      // proposito (ex.: ATIVIDADES) e que devem manter a cor no dark, igual ao
      // claro. Nem todas tem .botao-dinamico-container no iframe, entao a
      // deteccao por COR pega as que o sinal do iframe nao pega — sem ser
      // "todo iframe". NAO toca bordas/divisores (bg--type-image/light) nem
      // blocos ja escuros (bg--type-dark). Marca o grupo contiguo de mesma cor.
      // Idempotente (pula blocos ja marcados; classList.add nao duplica).
      name: "keep-color-cards",
      run: function () {
        var lessons = document.querySelectorAll(".blocks-lesson");
        for (var l = 0; l < lessons.length; l++) {
          var blocks = lessons[l].children;
          for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            if (b.classList.contains("dm-keep-original")) continue;
            var w = b.querySelector(".block-wrapper");
            if (!w || !w.classList || !w.classList.contains("bg--type-color")) {
              continue;
            }
            if (!isAuthorColor(cardColor(b))) continue;
            markContiguousColor(b, "dm-keep-original");
          }
        }
      },
    },

    {
      // CANVAS DO IFRAME ANINHADO — alinhar color-scheme ao contexto.
      // CONFIRMADO ao vivo: o conteudo do bloco vive num iframe srcdoc ANINHADO
      // cujo color-scheme fica "normal". Quando o iframe EXTERNO esta em dark e
      // o aninhado em normal, o Chromium pinta um BACKDROP OPACO CLARO (o
      // "iframe branco" — ex.: CURIOSIDADE). A pilula nao sofre porque seu
      // externo e "light" (preservado), batendo com o aninhado.
      //
      // Fix: setar o color-scheme do aninhado para casar com o destino:
      //   - bloco preservado (.dm-keep-original) -> light  (fica transparente,
      //     o fundo autoral do cartao aparece);
      //   - demais -> dark  (canvas escuro, blenda no tema; nada de branco).
      // Idempotente; roda apos keep-botao-panels (que ja aplicou as classes).
      // Vale para os iframes de SVG (bordas/badges) — embeds HTML do autor.
      name: "sync-iframe-canvas-scheme",
      run: function () {
        var frames = document.querySelectorAll(
          "iframe[data-rise-frontend-sandbox]"
        );
        for (var i = 0; i < frames.length; i++) {
          var f = frames[i];
          var scheme =
            f.closest && f.closest(".dm-keep-original") ? "light" : "dark";
          var doc = frameDoc(f);
          if (!doc) continue;
          // (a) DOCUMENTO da casca (sandbox.html): ficava com color-scheme
          // "normal" -> o Chromium podia pintar o canvas BRANCO quando o iframe
          // externo e dark (cunhas brancas atras dos triangulos da borda, ex.:
          // INTERACAO). Alinhar a casca, e nao so os aninhados, fecha a folga.
          setDocScheme(doc, scheme);
          // (b) iframes ANINHADOS (onde vive o conteudo/SVG do bloco) — idem.
          var nested = doc.querySelectorAll("iframe");
          for (var j = 0; j < nested.length; j++) {
            try {
              nested[j].style.setProperty("color-scheme", scheme);
            } catch (e) {}
            setDocScheme(frameDoc(nested[j]), scheme);
          }
        }
      },
    },

    // ---- MODELOS (copie, renomeie e ative) -----------------------------
    // {
    //   name: "exemplo-css-direto",
    //   run: function () {
    //     injectCss(
    //       "exemplo",
    //       ".dark-mode .algum-bloco h3{color:var(--dm-white)!important}"
    //     );
    //   },
    // },
    // {
    //   name: "exemplo-inline",
    //   run: function () {
    //     applyStyle('.algum-bloco .titulo', { color: "#ffffff" });
    //   },
    // },
  ];

  /* =====================================================================
   * ENGINE  — nao precisa mexer abaixo para adicionar regras.
   * =================================================================== */

  function runAll() {
    for (var i = 0; i < RULES.length; i++) {
      try {
        RULES[i].run();
      } catch (e) {
        if (window.console) {
          console.warn("[css-applier] regra falhou:", RULES[i].name, e);
        }
      }
    }
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    (window.requestAnimationFrame || window.setTimeout)(function () {
      scheduled = false;
      runAll();
    });
  }

  function start() {
    runAll();
    var root = document.getElementById("app") || document.body;
    if (!root || typeof MutationObserver === "undefined") return;
    new MutationObserver(schedule).observe(root, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
