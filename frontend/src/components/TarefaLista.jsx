import TarefaItem from "./TarefaItem";

function TarefaLista({ tarefas, aoEditar, aoExcluir, aoAlternarConcluida }) {
  if (tarefas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul className="tarefa-lista">
      {tarefas.map((tarefa) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          aoEditar={aoEditar}
          aoExcluir={aoExcluir}
          aoAlternarConcluida={aoAlternarConcluida}
        />
      ))}
    </ul>
  );
}

export default TarefaLista;