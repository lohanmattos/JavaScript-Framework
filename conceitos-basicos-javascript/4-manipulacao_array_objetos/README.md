## 4. Manipulação de Arrays e Objetos

### Objetivo
O objetivo desta seção é revisar como trabalhar eficientemente com arrays e objetos em JavaScript, abordando tanto a criação quanto a manipulação, além de explorar alguns métodos úteis para transformar e operar sobre arrays.

### Conteúdo
Nesta parte da revisão, vamos cobrir os seguintes tópicos:

1. **Criação e Manipulação de Arrays**
   - **Criação de Arrays**: Arrays podem ser criados usando colchetes `[]` ou o construtor `Array`.
     ```javascript
     let numeros = [1, 2, 3, 4, 5];
     let frutas = new Array('Maçã', 'Banana', 'Laranja');
     ```
   - **Manipulação de Arrays**: Adicionar, remover, ou acessar elementos em um array usando métodos como `push`, `pop`, `shift`, `unshift`, e acessando elementos diretamente pelo índice.
     ```javascript
     numeros.push(6); // Adiciona um elemento ao final
     frutas.pop();    // Remove o último elemento
     let primeiraFruta = frutas[0]; // Acessa o primeiro elemento
     ```

2. **Métodos de Array Importantes**
   - **`map`**: Cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
     ```javascript
     let quadrados = numeros.map(num => num * num);
     ```
   - **`filter`**: Cria um novo array com todos os elementos que passaram em um teste (fornecido como uma função).
     ```javascript
     let numerosPares = numeros.filter(num => num % 2 === 0);
     ```
   - **`reduce`**: Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
     ```javascript
     let soma = numeros.reduce((total, num) => total + num, 0);
     ```
   - **`forEach`**: Executa uma função para cada elemento do array, mas não retorna um novo array.
     ```javascript
     numeros.forEach(num => console.log(num));
     ```

3. **Criação e Manipulação de Objetos**
   - **Criação de Objetos**: Objetos são criados como pares chave-valor dentro de chaves `{}`.
     ```javascript
     let pessoa = {
       nome: "Carlos",
       idade: 30,
       cidade: "São Paulo"
     };
     ```
   - **Manipulação de Objetos**: Acessar, adicionar ou modificar propriedades de objetos usando notação de ponto ou colchetes.
     ```javascript
     pessoa.nome = "Ana";       // Modifica a propriedade 'nome'
     pessoa['idade'] = 25;      // Modifica a propriedade 'idade'
     pessoa.pais = "Brasil";    // Adiciona uma nova propriedade 'pais'
     ```

### Atividades
Para reforçar esses conceitos, sugerimos realizar os seguintes exercícios práticos:

1. **Manipulando Arrays**
   - Crie um array de números e use os métodos `map`, `filter`, `reduce`, e `forEach` para realizar diferentes operações sobre ele.
   - Exemplo:
     ```javascript
     let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     // Usando map para criar um novo array com os números ao quadrado
     let quadrados = numeros.map(num => num * num);

     // Usando filter para obter apenas os números pares
     let pares = numeros.filter(num => num % 2 === 0);

     // Usando reduce para somar todos os números
     let soma = numeros.reduce((total, num) => total + num, 0);

     // Usando forEach para imprimir todos os números
     numeros.forEach(num => console.log(num));
     ```

2. **Manipulando Objetos**
   - Crie um objeto que represente uma pessoa, com propriedades como `nome`, `idade`, e `cidade`. Adicione uma nova propriedade e modifique o valor de uma propriedade existente.
   - Exemplo:
     ```javascript
     let pessoa = {
       nome: "Carlos",
       idade: 30,
       cidade: "São Paulo"
     };

     // Modificando a propriedade 'nome'
     pessoa.nome = "Ana";

     // Adicionando uma nova propriedade 'pais'
     pessoa.pais = "Brasil";

     console.log(pessoa);
     ```

3. **Combinação de Arrays e Objetos**
   - Crie um array de objetos, onde cada objeto representa uma pessoa. Use métodos de array como `map` e `filter` para manipular esses dados.
   - Exemplo:
     ```javascript
     let pessoas = [
       { nome: "Carlos", idade: 30 },
       { nome: "Ana", idade: 25 },
       { nome: "João", idade: 20 }
     ];

     // Usando map para obter um array apenas com os nomes
     let nomes = pessoas.map(pessoa => pessoa.nome);

     // Usando filter para encontrar pessoas com idade maior que 20
     let adultos = pessoas.filter(pessoa => pessoa.idade > 20);

     console.log(nomes);
     console.log(adultos);
     ```

### Conclusão
Esses exercícios ajudarão a entender e dominar a manipulação de arrays e objetos em JavaScript, habilidades essenciais para trabalhar com dados e desenvolver funcionalidades em Vue.js. Praticar a criação e transformação de arrays e objetos é fundamental para construir aplicações dinâmicas e eficientes.
