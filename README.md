# Todo App — C#, ASP.NET Core API e React

Este projeto é um Todo App criado para estudo de desenvolvimento full stack em nível básico.

O sistema possui um backend em C# com ASP.NET Core API e um frontend em React com Vite.

A aplicação permite:

- listar tarefas
- criar tarefas
- editar tarefas
- excluir tarefas
- marcar tarefas como concluídas

---

## Tecnologias utilizadas

### Backend

- C#
- ASP.NET Core API
- Controllers
- Models
- Rotas HTTP
- Swagger
- CORS

### Frontend

- React
- Vite
- JavaScript
- CSS
- Fetch API
- Componentes
- Props
- useState
- useEffect

---

## Arquitetura do projeto

Estrutura principal:

```txt
todoNet/
├── .env
├── .env.example
├── .gitignore
├── README.md
├── backend/
│   └── TodoApi/
│       ├── Controllers/
│       │   └── TarefasController.cs
│       ├── Models/
│       │   └── Tarefa.cs
│       ├── Program.cs
│       └── TodoApi.csproj
└── frontend/
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── components/
        │   ├── TarefaForm.jsx
        │   ├── TarefaLista.jsx
        │   └── TarefaItem.jsx
        ├── services/
        │   └── tarefaService.js
        ├── App.jsx
        ├── App.css
        └── main.jsx