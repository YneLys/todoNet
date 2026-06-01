const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("A variável VITE_API_URL não foi encontrada no .env");
}

export async function listarTarefas() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error("Erro ao listar tarefas");
  }

  return await resposta.json();
}

export async function criarTarefa(tarefa) {
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tarefa)
  });

  if (!resposta.ok) {
    throw new Error("Erro ao criar tarefa");
  }

  return await resposta.json();
}

export async function editarTarefa(id, tarefa) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tarefa)
  });

  if (!resposta.ok) {
    throw new Error("Erro ao editar tarefa");
  }

  return await resposta.json();
}

export async function excluirTarefa(id) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!resposta.ok) {
    throw new Error("Erro ao excluir tarefa");
  }
}