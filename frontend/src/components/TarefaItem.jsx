function TarefaItem({ tarefa, aoEditar, aoExcluir, aoAlternarConcluida }) {
  return (
    <li className="tarefa-item">
      <div className="tarefa-info">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => aoAlternarConcluida(tarefa)}
        />

        <span className={tarefa.concluida ? "concluida" : ""}>
          {tarefa.titulo}
        </span>
      </div>

      <div className="tarefa-acoes">
        <button onClick={() => aoEditar(tarefa)}>
          Editar
        </button>

        <button onClick={() => aoExcluir(tarefa.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}

export default TarefaItem;