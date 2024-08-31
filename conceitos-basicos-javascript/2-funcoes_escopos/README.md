## 3. Funções e Escopo

### Objetivo
O objetivo desta seção é revisar e solidificar o entendimento sobre funções e os diferentes tipos de escopo no JavaScript, que são cruciais para o desenvolvimento eficiente com Vue.js.

### Conteúdo
Nesta parte da revisão, vamos abordar os seguintes tópicos:

1. **Declaração e Expressão de Função**
   - **Declaração de Função**: Uma maneira tradicional de definir uma função. Estas funções são "elevadas" (hoisted) ao topo do escopo.
     ```javascript
     function saudacao() {
       return "Olá!";
     }
     ```
   - **Expressão de Função**: Uma função atribuída a uma variável. Não são "elevadas" ao topo.
     ```javascript
     const saudacao = function() {
       return "Olá!";
     };
     ```

2. **Funções de Seta (Arrow Functions)**
   - **Arrow Functions**: Uma forma mais curta de escrever funções em JavaScript, introduzida no ES6. Além de serem mais concisas, elas não têm seu próprio `this`, o que as torna úteis em certos contextos.
     ```javascript
     const saudacao = () => "Olá!";
     ```

3. **Escopo de Função, Escopo de Bloco e Escopo Global**
   - **Escopo Global**: Variáveis declaradas fora de funções ou blocos, acessíveis de qualquer lugar do código.
   - **Escopo de Função**: Variáveis declaradas dentro de uma função, acessíveis apenas dentro dessa função.
   - **Escopo de Bloco**: Variáveis declaradas dentro de um bloco (`{}`), acessíveis apenas dentro desse bloco. Definido por `let` e `const`.

   Exemplo de escopo:
   ```javascript
   let globalVar = "Eu sou global";

   function funcaoExemplo() {
     let funcVar = "Eu sou uma variável de função";

     if (true) {
       let blockVar = "Eu sou uma variável de bloco";
       console.log(globalVar); // Acessa a variável global
       console.log(funcVar);   // Acessa a variável de função
       console.log(blockVar);  // Acessa a variável de bloco
     }

     // console.log(blockVar);  // Erro: blockVar não está definida aqui
   }

   funcaoExemplo();
