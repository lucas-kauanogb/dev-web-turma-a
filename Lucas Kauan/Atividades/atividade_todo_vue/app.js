const { createApp } = Vue;

createApp({
  data() {
    return {
      novaTarefa: '',
      listaDeTarefas: [] 
    };
  },

  methods: {
    
    cadastrarTarefa() {
      
      if (this.novaTarefa.trim() === '') return;

      
      this.listaDeTarefas.push({
        descricao: this.novaTarefa.trim(),
        finalizado: false
      });

      
      this.novaTarefa = '';
    },

    
    deletarTarefa(indice) {
      this.listaDeTarefas.splice(indice, 1);
    },

    
    alternarStatus(tarefa) {
      tarefa.finalizado = !tarefa.finalizado;
    }
  }

}).mount('#app');