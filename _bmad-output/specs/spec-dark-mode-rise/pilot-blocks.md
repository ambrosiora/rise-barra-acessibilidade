# Lista de blocos do piloto (SLa26liK)

Companion de `SPEC.md`. Inventário dos tipos de bloco presentes no piloto Rise, base para os ACs por tipo de conteúdo. Extraído de `content/runtime-data.js` (base64/JSON decodificado em 2026-06-24).

## Volume

- **10 Encontros (lessons):** E1 108 · E2 94 · E3 105 · E4 112 · E5 123 · E6 61 · E7 47 · E8 83 · E9 112 · E10 76 itens.
- **~921 itens** no total.

## Famílias e variantes

| Família / type | Qtde | Variantes (contagem) | Tipo de conteúdo (p/ AC) |
|---|---|---|---|
| `text` / text | 284 | paragraph 194 · subheading paragraph 39 · heading paragraph 39 · heading 11 · subheading 1 | Texto / títulos |
| `html` / html | 277 | (rich text / embeds Rise) | Texto rico / HTML embutido |
| `divider` / divider | 104 | + `continue` / divider 10 | Divisores / espaçadores |
| `buttons` / interactive | 94 | button 93 · button stack 1 | Botões |
| `image` / image | 93 | text aside 48 · hero 34 · banner 8 · full 2 · text overlay 1 | Imagem (+ imagem-texto / sobre imagem) |
| `impact` / text | 23 | note 22 · d 1 | Bloco de destaque / nota |
| `interactive` / interactive | 9 | accordion 6 · tabs 3 | Interativo (acordeão/abas) |
| `interactive-fullscreen` / interactive | 9 | labeledgraphic 4 · process 3 · timeline 2 | Interativo fullscreen |
| `list` / list | 8 | — | Listas |
| `quote` / quote | 5 | — | Citações |
| `flashcard` / interactive | 3 | — | Flashcards |
| `mondrian` / custom | 2 | — | Custom (consome tokens Arc) |

## Atributos de fundo relevantes para dark mode

- **`cardMode`:** `WHITE` 21 · `TRANSPARENT` 1 → cards com fundo branco explícito (alvo do caminho A).
- **`backgroundType`:** `IMAGE` 125 · `COLOR` 314 · `GRAY` 3 · `LIGHT` 8 → fundos `LIGHT`/`GRAY` e cards `WHITE` são os que precisam de override; `IMAGE` exige tratamento de texto-sobre-imagem (Open Question no kernel).

## Agrupamento por "tipo de conteúdo" (índice para `acceptance-criteria.md`)

1. **Texto e títulos** — `text` (paragraph/heading/subheading), `html`, `impact/note`.
2. **Listas** — `list`.
3. **Citações** — `quote`.
4. **Tabelas** — dentro de `html`/`rise-tiptap` (cabeçalho, células, linhas alternadas).
5. **Links** — inline em qualquer texto.
6. **Botões** — `buttons` (button / button stack).
7. **Imagem e imagem-texto** — `image` (text aside / hero / banner / full / text overlay).
8. **Blocos interativos** — `interactive` (accordion/tabs), `interactive-fullscreen` (labeledgraphic/process/timeline), `flashcard`.
9. **Superfícies de página/divisores** — `divider`/`continue`, wrappers do app-shell.
10. **Blocos já escuros** — qualquer bloco com `bg--type-dark` (não inverter).
