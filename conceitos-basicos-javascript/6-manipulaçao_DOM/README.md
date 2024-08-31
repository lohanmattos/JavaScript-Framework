## 6. Manipulação do DOM

### Objetivo
O objetivo desta seção é revisar como manipular o DOM (Document Object Model) utilizando JavaScript, preparando os alunos para utilizar esses conceitos no desenvolvimento com Vue.js.

### Conteúdo
Nesta parte da revisão, vamos abordar os seguintes tópicos:

1. **Seleção de Elementos**
   - **`getElementById`**: Seleciona um elemento com base no valor do atributo `id`.
     ```javascript
     let titulo = document.getElementById('titulo');
     ```
   - **`querySelector` e `querySelectorAll`**: Seleciona o primeiro elemento que corresponde ao seletor CSS especificado. `querySelectorAll` retorna todos os elementos correspondentes.
     ```javascript
     let paragrafo = document.querySelector('p');
     let todosParagrafos = document.querySelectorAll('p');
     ```

2. **Modificação de Elementos**
   - **`textContent`**: Modifica ou retorna o conteúdo textual de um elemento.
     ```javascript
     titulo.textContent = 'Novo Título';
     ```
   - **`innerHTML`**: Modifica ou retorna o conteúdo HTML de um elemento.
     ```javascript
     titulo.innerHTML = '<strong>Novo Título em Negrito</strong>';
     ```
   - **`style`**: Modifica estilos CSS inline de um elemento.
     ```javascript
     titulo.style.color = 'blue';
     titulo.style.fontSize = '24px';
     ```

3. **Eventos**
   - **`addEventListener`**: Adiciona um ouvinte de eventos a um elemento, permitindo que você execute código quando um evento específico ocorre.
     ```javascript
     titulo.addEventListener('click', function() {
       alert('Título clicado!');
     });
     ```

### Atividades
Para reforçar esses conceitos, sugerimos realizar os seguintes projetos práticos curtos:

1. **Alterando o Texto de um Elemento**
   - Crie um elemento `h1` e, ao clicar em um botão, altere o texto do `h1` usando `textContent`.
   - Exemplo:
     ```html
     <h1 id="titulo">Texto Original</h1>
     <button id="botao">Alterar Texto</button>

     <script>
       let titulo = document.getElementById('titulo');
       let botao = document.getElementById('botao');

       botao.addEventListener('click', function() {
         titulo.textContent = 'Texto Alterado';
       });
     </script>
     ```

2. **Modificando o Conteúdo HTML de um Elemento**
   - Crie um parágrafo e um botão. Ao clicar no botão, altere o conteúdo HTML do parágrafo usando `innerHTML`.
   - Exemplo:
     ```html
     <p id="descricao">Esta é uma descrição simples.</p>
     <button id="alterar">Alterar Descrição</button>

     <script>
       let descricao = document.getElementById('descricao');
       let botao = document.getElementById('alterar');

       botao.addEventListener('click', function() {
         descricao.innerHTML = '<em>Descrição alterada com <strong>HTML</strong> dinâmico!</em>';
       });
     </script>
     ```

3. **Alterando Estilos de Elementos**
   - Crie um botão que, ao ser clicado, altere a cor e o tamanho da fonte de um parágrafo.
   - Exemplo:
     ```html
     <p id="texto">Texto com estilo dinâmico.</p>
     <button id="estilo">Alterar Estilo</button>

     <script>
       let texto = document.getElementById('texto');
       let botao = document.getElementById('estilo');

       botao.addEventListener('click', function() {
         texto.style.color = 'red';
         texto.style.fontSize = '20px';
       });
     </script>
     ```

4. **Manipulando Vários Elementos**
   - Crie uma lista de itens (`ul` com `li`). Adicione um botão que, ao ser clicado, altere o texto de todos os itens da lista.
   - Exemplo:
     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ul>
     <button id="alterarItens">Alterar Itens</button>

     <script>
       let itens = document.querySelectorAll('li');
       let botao = document.getElementById('alterarItens');

       botao.addEventListener('click', function() {
         itens.forEach(function(item, index) {
           item.textContent = `Item ${index + 1} Alterado`;
         });
       });
     </script>
     ```

### Conclusão
Esses exercícios práticos ajudarão a entender e dominar a manipulação do DOM usando JavaScript, habilidades essenciais para desenvolver interações dinâmicas na web. Compreender como manipular o DOM de forma eficiente é fundamental para trabalhar com Vue.js, onde essa manipulação é frequentemente automatizada e simplificada pelo framework.
