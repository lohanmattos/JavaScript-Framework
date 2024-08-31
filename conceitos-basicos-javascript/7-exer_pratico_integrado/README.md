## Exercício Prático Integrado

### Objetivo
O objetivo deste exercício é aplicar todos os conceitos revisados até agora em um projeto prático, simulando a criação de um componente Vue.js simples utilizando HTML, CSS e JavaScript. Este exercício consolidará o entendimento sobre manipulação do DOM, eventos, funções, métodos de arrays e o uso de Promises ou `async/await`.

### Atividades

#### 1. Estrutura da Aplicação
- **HTML**: Crie a estrutura básica da aplicação com um título, um campo de entrada (input), um botão e uma lista não ordenada (`ul`) para exibir os dados.
- **CSS**: Estilize a aplicação para torná-la visualmente agradável.
- **JavaScript**: Utilize JavaScript para manipular o DOM, capturar eventos, manipular arrays e fazer chamadas simuladas a uma API.

#### 2. Manipulação do DOM e Eventos
- **Descrição**: A aplicação deve permitir que o usuário insira um texto em um campo de entrada e, ao clicar em um botão, adicione esse texto a uma lista. Cada item da lista deve ter um botão de "Remover" que, quando clicado, remova o item da lista.
- **Implementação**:
  ```html
  <h1>Lista de Tarefas</h1>
  <input type="text" id="novaTarefa" placeholder="Digite uma nova tarefa">
  <button id="adicionarTarefa">Adicionar Tarefa</button>
  <ul id="listaTarefas"></ul>

  <script>
    let listaTarefas = document.getElementById('listaTarefas');
    let botaoAdicionar = document.getElementById('adicionarTarefa');
    let inputTarefa = document.getElementById('novaTarefa');

    botaoAdicionar.addEventListener('click', function() {
      let tarefa = inputTarefa.value;
      if (tarefa) {
        let li = document.createElement('li');
        li.textContent = tarefa;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', function() {
          listaTarefas.removeChild(li);
        });

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
        inputTarefa.value = '';
      }
    });
  </script>
