using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TarefasController : ControllerBase
{
    private static List<Tarefa> tarefas = new List<Tarefa>
    {
        new Tarefa {Id = 1, Titulo = "Estudar c# na alura", Concluida = false},
        new Tarefa {Id = 2, Titulo = "Ler documentação de C# e Dotnet", Concluida = false},
        new Tarefa {Id = 3, Titulo = "Criar um projeto de teste", Concluida = false},
        new Tarefa {Id = 4, Titulo = "Fazer anotação de dúvidas", Concluida = false}
    }; 


    [HttpGet]
    public ActionResult<List<Tarefa>> Listar()
    {
        return Ok(tarefas);
    }

    [HttpGet("{id}")]
    public ActionResult<Tarefa> BuscarPorId(int id)
    {
        Tarefa? tarefa = tarefas.FirstOrDefault(t => t.Id == id);
    
        if (tarefa == null)
        {
            return NotFound("Tarefa não");
        }
        return Ok(tarefa);
    }

    [HttpPost]
    public ActionResult<Tarefa> Criar(Tarefa novaTarefa)
    {   
        int novoId = tarefas.Count > 0 
            ? tarefas.Max(t => t.Id) + 1
            : 1;

        novaTarefa.Id = novoId;
        tarefas.Add(novaTarefa);

        return CreatedAtAction(nameof(BuscarPorId), new { id = novaTarefa.Id }, novaTarefa);
    }

    [HttpPut("{id}")]
    public ActionResult<Tarefa> Editar(int id, Tarefa tarefaAtualizada)
    {
        Tarefa? tarefa = tarefas.FirstOrDefault(t => t.Id == id);

        if (tarefa == null)
        {
            return NotFound ("Tarefa não encontrada.");

        }

        tarefa.Titulo = tarefaAtualizada.Titulo;
        tarefa.Concluida = tarefaAtualizada.Concluida;

        return Ok(tarefa);
    }

    [HttpDelete("{id}")]
    public ActionResult Excluir(int id)
    {
        Tarefa? tarefa = tarefas.FirstOrDefault(t => t.Id == id);

        if (tarefa == null)
        {
            return NotFound("Tarefa não encontrada.");
        }

        tarefas.Remove(tarefa);
        return NoContent();
    }
}