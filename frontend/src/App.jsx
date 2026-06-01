import { useEffect, useState } from "react";
import "./App.css";

import TarefaForm from "./components/TarefaForm";
import TarefaLista from "./components/TarefaLista";

import {
  listarTarefas,
  criarTarefa,
  editarTarefa,
  excluirTarefa
} from "./services/tarefaService";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaEditando, setTarefaEditando] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    try {
      setCarregando(true);

      const dados = await listarTarefas();

      setTarefas(dados);
      setErro("");
    } catch (erro) {
      setErro("Não foi possível carregar as tarefas.");
    } finally {
      setCarregando(false);
    }
  }

  async function salvarTarefa(tarefa) {
    try {
      if (tarefaEditando) {
        await editarTarefa(tarefaEditando.id, tarefa);
      } else {
        await criarTarefa(tarefa);
      }

      setTarefaEditando(null);
      await carregarTarefas();
    } catch (erro) {
      setErro("Não foi possível salvar a tarefa.");
    }
  }

  function iniciarEdicao(tarefa) {
    setTarefaEditando(tarefa);
  }

  function cancelarEdicao() {
    setTarefaEditando(null);
  }

  async function removerTarefa(id) {
    const confirmou = confirm("Tem certeza que deseja excluir esta tarefa?");

    if (!confirmou) {
      return;
    }

    try {
      await excluirTarefa(id);
      await carregarTarefas();
    } catch (erro) {
      setErro("Não foi possível excluir a tarefa.");
    }
  }

  async function alternarConcluida(tarefa) {
    const tarefaAtualizada = {
      titulo: tarefa.titulo,
      concluida: !tarefa.concluida
    };

    try {
      await editarTarefa(tarefa.id, tarefaAtualizada);
      await carregarTarefas();
    } catch (erro) {
      setErro("Não foi possível atualizar a tarefa.");
    }
  }

  return (
    <main className="container">
      <h1>Lista de Tarefas</h1>

      <p className="subtitulo">
        Gerencie suas tarefas
      </p>

      <TarefaForm
        aoSalvar={salvarTarefa}
        tarefaEditando={tarefaEditando}
        cancelarEdicao={cancelarEdicao}
      />

      {erro && <p className="erro">{erro}</p>}

      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : (
        <TarefaLista
          tarefas={tarefas}
          aoEditar={iniciarEdicao}
          aoExcluir={removerTarefa}
          aoAlternarConcluida={alternarConcluida}
        />
      )}
    </main>
  );
}

export default App;