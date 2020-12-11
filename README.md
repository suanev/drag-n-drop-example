# UI Clone - Pipefy (drag n' drop function)

## Importante lembrar para este exercício que:

### Propridades Flex

> **flex-grow**: determina a habilidade de um componente esticar mais do que o necessário. Quando esta propriedade recebe 0, ela passa ter uma largura fixa, que nunca é alterada. Pode gerar uma barra de rolagem quando o espaço acaba se tornando curto para os elementos contidos dentro deste componente.

> **flex-shrink**: determina a possibilidade desse elemento reduzir(encolher), de acordo com o tamanho do elemento. Quando esta propriedade recebe 0, ela passa a ter uma largura fixa, que nuca é alterada. Pode gerar uma barra de rolagem quando o espaço acaba se tornando curto para os elementos contidos dentro deste componente.

> **flex-basis**: determina o tamanho base do componente;

> Quando o display é _flex_, e o _flex-direction: row_, o basis esta definindo a largura do componente, quando a direction é column, ele define a altura deste componente.

### Técnica CSS - Aplicando estilo a partir do 2 item (2 formas):

> **1 - & + elemento:** exemplo: & + div: quero estilizar a div que antes dela possui outra div, ou seja, a primeira div como não possui nenhuma outra div à sua sempre, não receberá o estilo.

> **2 - :not(:first-child) - mais intuitiva:** todo elemento, que não é o primeiro elemento, recebe a propriedade que estou desejando aplicar.

### Pegando o tamanho de um elemento:

> **Element.getBoundingClientRect():** O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport.

## Tecnologias utilizadas

> Estilização de css atráves de javascript:
> [styled-components](https://styled-components.com/)

> Biblioteca responsável por criar o drag and drop no react:
> [React DnD](https://react-dnd.github.io/react-dnd/docs/overview)

> Immer: 
>[Immer](https://immerjs.github.io/immer/docs/introduction)

## Tutorial por

[Rocketseat](https://rocketseat.com.br/)
