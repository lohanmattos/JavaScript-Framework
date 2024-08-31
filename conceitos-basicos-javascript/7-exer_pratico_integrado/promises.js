function simulaSalvarTarefa(tarefa) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tarefa);
      }, 2000);
    });
  }
  
  botaoAdicionar.addEventListener('click', async function() {
    let tarefa = inputTarefa.value;
    if (tarefa) {
      let tarefaSalva = await simulaSalvarTarefa(tarefa);
      tarefas.push(tarefaSalva);
  
      let li = document.createElement('li');
      li.textContent = tarefaSalva;
  
      let botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
        tarefas = tarefas.filter(t => t !== tarefaSalva);
      });
  
      li.appendChild(botaoRemover);
      listaTarefas.appendChild(li);
      inputTarefa.value = '';
    }
  });
  