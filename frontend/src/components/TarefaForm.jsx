import { useEffect, useState } from "react";

function TarefaForm({ aoSalvar, tarefaEditando, cancelarEdicao }) {
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (tarefaEditando) {
      setTitulo(tarefaEditando.titulo);
    } else {
      setTitulo("");
    }
  }, [tarefaEditando]);

  function lidarComSubmit(evento) {
    evento.preventDefault();

    if (titulo.trim() === "") {
      alert("Digite o título da tarefa.");
      return;
    }

    const tarefa = {
      titulo: titulo,
      concluida: tarefaEditando ? tarefaEditando.concluida : false
    };

    aoSalvar(tarefa);

    setTitulo("");
  }

  return (
    <form className="formulario" onSubmit={lidarComSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />

      <button type="submit">
        {tarefaEditando ? "Salvar alteração" : "Adicionar"}
      </button>

      {tarefaEditando && (
        <button type="button" onClick={cancelarEdicao}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default TarefaForm;