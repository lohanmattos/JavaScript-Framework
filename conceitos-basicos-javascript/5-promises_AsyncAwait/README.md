## 5. Promises e Async/Await

### Objetivo
O objetivo desta seção é revisar como trabalhar com operações assíncronas em JavaScript usando Promises e `async/await`, ferramentas essenciais para lidar com código assíncrono de maneira mais legível e eficiente.

### Conteúdo
Nesta parte da revisão, vamos abordar os seguintes tópicos:

1. **Introdução às Promises**
   - **Promises**: São objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Uma Promise pode estar em um dos três estados:
     - `pending` (pendente): Estado inicial, que não foi realizada nem rejeitada.
     - `fulfilled` (realizada): A operação foi concluída com sucesso.
     - `rejected` (rejeitada): A operação falhou.
   - Exemplo de criação de uma Promise:
     ```javascript
     const minhaPromise = new Promise((resolve, reject) => {
       let sucesso = true;
       
       if (sucesso) {
         resolve("A operação foi bem-sucedida!");
       } else {
         reject("A operação falhou.");
       }
     });
     ```

2. **Métodos `.then`, `.catch`, e `.finally`**
   - **`.then()`**: É usado para manipular o caso em que a Promise é resolvida (fulfilled). Recebe uma função callback que é executada quando a Promise é resolvida.
   - **`.catch()`**: É usado para manipular o caso em que a Promise é rejeitada (rejected). Recebe uma função callback que é executada quando a Promise é rejeitada.
   - **`.finally()`**: É executado após a Promise ser resolvida ou rejeitada, independentemente do resultado. Útil para executar código de limpeza ou finalização.
   - Exemplo:
     ```javascript
     minhaPromise
       .then(resultado => {
         console.log(resultado); // "A operação foi bem-sucedida!"
       })
       .catch(erro => {
         console.error(erro);    // "A operação falhou."
       })
       .finally(() => {
         console.log("Operação concluída."); // Sempre executado
       });
     ```

3. **Uso de `async` e `await`**
   - **`async`**: Uma função declarada com `async` retorna automaticamente uma Promise. Esta função permite o uso da palavra-chave `await` dentro dela.
   - **`await`**: Pausa a execução da função `async` até que a Promise seja resolvida. Pode ser usado para esperar o resultado de uma operação assíncrona antes de continuar.
   - Exemplo:
     ```javascript
     async function minhaFuncaoAssincrona() {
       try {
         let resultado = await minhaPromise;
         console.log(resultado); // "A operação foi bem-sucedida!"
       } catch (erro) {
         console.error(erro);    // "A operação falhou."
       } finally {
         console.log("Operação concluída.");
       }
     }

     minhaFuncaoAssincrona();
     ```

### Atividades
Para reforçar esses conceitos, sugerimos realizar os seguintes exercícios práticos:

1. **Consumindo APIs Fictícias com Promises**
   - Crie uma função que simula uma chamada para uma API que retorna dados após um atraso. Use Promises para manipular a resposta da API e tratar possíveis erros.
   - Exemplo:
     ```javascript
     function simulaApi() {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           const sucesso = Math.random() > 0.5;
           if (sucesso) {
             resolve("Dados recebidos com sucesso!");
           } else {
             reject("Erro ao acessar a API.");
           }
         }, 2000);
       });
     }

     simulaApi()
       .then(response => console.log(response))
       .catch(error => console.error(error))
       .finally(() => console.log("Chamada à API finalizada."));
     ```

2. **Usando `async` e `await` para Consumir APIs**
   - Reescreva o exemplo anterior utilizando `async/await` para lidar com a chamada da API fictícia.
   - Exemplo:
     ```javascript
     async function chamaApi() {
       try {
         let response = await simulaApi();
         console.log(response); // "Dados recebidos com sucesso!"
       } catch (error) {
         console.error(error); // "Erro ao acessar a API."
       } finally {
         console.log("Chamada à API finalizada.");
       }
     }

     chamaApi();
     ```

3. **Integração com uma API Real**
   - Se possível, integre uma chamada para uma API pública real (como a API de usuários do JSONPlaceholder) e manipule os dados retornados.
   - Exemplo:
     ```javascript
     async function buscaUsuarios() {
       try {
         let response = await fetch('https://jsonplaceholder.typicode.com/users');
         let usuarios = await response.json();
         console.log(usuarios);
       } catch (error) {
         console.error("Erro ao buscar usuários:", error);
       }
     }

     buscaUsuarios();
     ```

### Conclusão
Esses exercícios ajudarão a entender e dominar o uso de Promises e `async/await` em JavaScript. Essas ferramentas são essenciais para lidar com operações assíncronas, como chamadas de API, e para escrever código assíncrono que seja mais fácil de entender e manter. Essas habilidades são fundamentais para o desenvolvimento moderno em Vue.js, onde a manipulação assíncrona de dados é comum.
