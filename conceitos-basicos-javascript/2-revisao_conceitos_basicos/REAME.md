## 2. Revisão de Conceitos Básicos de JavaScript

### Objetivo
O objetivo desta seção é relembrar e consolidar os conceitos básicos e essenciais do JavaScript que são fundamentais para o desenvolvimento com Vue.js.

### Conteúdo
Nesta parte da revisão, vamos cobrir os seguintes tópicos:

1. **Tipos de Dados**
   - **Number**: Representa valores numéricos, sejam inteiros ou de ponto flutuante.
   - **String**: Representa texto, uma sequência de caracteres.
   - **Boolean**: Representa um valor lógico que pode ser `true` ou `false`.
   - **Null**: Representa um valor intencionalmente vazio ou inexistente.
   - **Undefined**: Representa uma variável que foi declarada mas ainda não foi atribuída.
   - **Object**: Representa coleções de pares chave-valor ou entidades complexas.
   - **Array**: Um tipo especial de objeto para armazenar listas ordenadas de valores.

2. **Variáveis**
   - **var**: Declara uma variável com escopo global ou de função, com possibilidade de reatribuição.
   - **let**: Declara uma variável com escopo de bloco, com possibilidade de reatribuição.
   - **const**: Declara uma constante com escopo de bloco, que não pode ser reatribuída.

3. **Operadores**
   - **Aritméticos**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
   - **De Comparação**: `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`
   - **Lógicos**: `&&`, `||`, `!`

### Atividades
Para reforçar esses conceitos, sugerimos realizar os seguintes exercícios práticos:

1. **Tipos de Dados**
   - Declare variáveis utilizando diferentes tipos de dados e imprima seus valores e tipos no console usando `typeof`.
   - Exemplo: 
     ```javascript
     let idade = 25;
     let nome = "João";
     let ativo = true;
     console.log(typeof idade); // number
     console.log(typeof nome);  // string
     console.log(typeof ativo); // boolean
     ```

2. **Variáveis**
   - Crie variáveis usando `var`, `let`, e `const`. Tente reatribuir valores para `let` e `const` e observe os comportamentos.
   - Exemplo:
     ```javascript
     var cidade = "São Paulo";
     let estado = "SP";
     const pais = "Brasil";

     cidade = "Rio de Janeiro"; // Funciona
     estado = "RJ";             // Funciona
     // pais = "Argentina";     // Erro: Não pode reatribuir valor a uma constante
     ```

3. **Operadores**
   - Realize operações aritméticas básicas e compare valores usando operadores de comparação e lógicos.
   - Exemplo:
     ```javascript
     let a = 10;
     let b = 20;
     let soma = a + b;         // 30
     let comparacao = a > b;   // false
     let logico = a < b && b > 15; // true
     console.log(soma, comparacao, logico);
     ```

### Conclusão
Esses exercícios práticos ajudarão a relembrar os conceitos básicos de JavaScript e a prepará-lo para tópicos mais avançados, especialmente ao entrar no desenvolvimento com Vue.js. Certifique-se de praticar e entender cada um desses conceitos, pois eles formam a base para o trabalho com frameworks modernos como o Vue.js.
