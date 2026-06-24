# Critérios de aceite (Given/When/Then) por tipo de conteúdo

Companion de `SPEC.md`. ACs verificáveis para o dark mode do piloto Rise, agrupados pelos tipos de conteúdo de `pilot-blocks.md`. Validação manual no browser (servir via HTTP em `http://localhost:8765`, abrir `piloto-modulo-1-raw-SLa26liK/content/index.html`, Encontro → engrenagem → modo de cores → Modo noturno ON). "Escuro" = computed `background-color` próximo da paleta de `strategy.md`; "AA" = contraste ≥ 4.5:1.

## Pré-condição comum

```
Given o piloto Rise servido via HTTP com a barra B42 (data-dark-css="mundo-aprendiz")
  And o dark-mode.min.css em sincronia com o dark-mode.css fonte
When o aluno ativa o Modo noturno
Then a classe .dark-mode é aplicada ao #app
  And color-scheme:dark está ativo em #app e descendentes
```

## AC-1 — Superfícies de página (app-shell) — CAP-2

```
Given uma lição aberta com dark mode ON
When eu inspeciono .page__wrapper--white, .lesson__content (e .theme .lesson__content),
     .page__header, .blocks-lesson
Then o computed background-color de cada uma é escuro (≈ #1c1c1c)
  And não há nenhuma superfície branca residual ao rolar a página inteira
```

## AC-2 — Texto e títulos — CAP-3

```
Given blocos de texto (paragraph/heading/subheading), html e impact/note com dark mode ON
When eu leio o corpo e os títulos
Then o texto usa cor clara (≈ #ededed) sobre fundo escuro
  And o contraste corpo↔fundo é ≥ 4.5:1 (AA)
  And títulos com cor de marca (ex.: teal) permanecem legíveis (sem texto escuro sobre escuro)
```

## AC-3 — Fundos de bloco "claros" — CAP-2/CAP-3

```
Given blocos com bg--type-light / bg--range-light, cardMode WHITE ou backgroundType LIGHT/GRAY
When dark mode está ON
Then o background do bloco é escuro (≈ #2a2a2a)
  And as bordas usam tom escuro (≈ #515151)
  And o texto interno mantém contraste AA
```

## AC-4 — Listas — CAP-3

```
Given um bloco list com dark mode ON
When eu leio os itens e seus marcadores/numeração
Then texto e marcadores são claros e legíveis sobre fundo escuro (AA)
  And o fundo do bloco está escuro (sem faixa branca atrás da lista)
```

## AC-5 — Citações (quote) — CAP-3

```
Given um bloco quote com dark mode ON
When eu leio a citação e a atribuição
Then o texto é claro (AA) e a barra/realce da citação permanece visível sobre fundo escuro
  And o fundo do bloco está escuro
```

## AC-6 — Tabelas — CAP-3

```
Given uma tabela (rise-tiptap) com dark mode ON
When eu inspeciono cabeçalho (th), células (td) e linhas alternadas
Then th tem fundo escuro (≈ #3d3d3d) e texto claro
  And td tem texto claro e bordas escuras (≈ #515151)
  And linhas alternadas usam ≈ #2a2a2a (zebra ainda perceptível)
```

## AC-7 — Links — CAP-3

```
Given texto com links inline e dark mode ON
When eu identifico os links
Then os links usam cor clara distinta (≈ #70cbfa) com contraste AA sobre fundo escuro
  And são visualmente distinguíveis do texto comum
```

## AC-8 — Botões — CAP-3

```
Given blocos buttons (button / button stack) com dark mode ON
When eu vejo e foco os botões
Then rótulo e fundo do botão mantêm contraste AA
  And o estado de foco/hover continua perceptível em fundo escuro
```

## AC-9 — Blocos interativos — CAP-1/CAP-3

```
Given accordion, tabs, labeledgraphic, process, timeline e flashcard com dark mode ON
When eu expando/navego o componente
Then superfícies, rótulos e divisores internos escurecem (preferencialmente via tokens Arc)
  And o conteúdo revelado (painel aberto, aba ativa, verso do flashcard) é legível (AA)
  And controles (setas, abas, hotspots) permanecem visíveis
```

## AC-10 — Imagem e imagem-texto — CAP-3 / Open Question

```
Given image text aside / hero / banner / full e blocos backgroundType IMAGE com dark mode ON
When há texto sobre ou ao lado da imagem
Then o texto adjacente segue o tema escuro e legível (AA)
  And a imagem em si não é invertida nem dessaturada
  And [PENDENTE decisão da Open Question] texto sobre foto recebe tratamento de legibilidade
      (scrim/overlay) OU mantém-se como no original — confirmar antes de fechar este AC
```

## AC-11 — Não inverter blocos já escuros — CAP-3

```
Given blocos com bg--type-dark (já escuros no tema claro) e dark mode ON
When eu os inspeciono
Then permanecem escuros (não são clareados nem invertidos)
  And o texto neles continua claro e legível (sem regressão de contraste)
```

## AC-12 — Sincronia .css ↔ .min.css — CAP-4

```
Given uma alteração feita no dark-mode.css fonte
When o dark-mode.min.css não foi regenerado
Then a alteração NÃO tem efeito no browser (o .min.css é o carregado)
  And após regenerar o .min.css o efeito aparece
  And o conteúdo dos dois arquivos é equivalente (diff de minificação nulo)
```

## AC-13 — Reuso por cliente — CAP-5

```
Given a estratégia A+B aplicada em css/mundo-aprendiz/
When eu instancio para um novo cliente copiando a pasta e ajustando a paleta
  And aponto data-dark-css="{novo-cliente}"
Then o dark mode funciona no novo cliente sem editar a B42 nem os bundles Rise
```
