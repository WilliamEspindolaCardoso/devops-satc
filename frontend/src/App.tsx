import { useState } from "react";
import "./App.css";

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  idade: string;
}

function App() {
  const [formData, setFormData] = useState<Usuario>({
    nome: "",
    email: "",
    telefone: "",
    idade: ""
  });

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!formData.nome || !formData.email) {
      alert("Nome e Email são obrigatórios!");
      return;
    }

    setUsuarios([...usuarios, formData]);

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      idade: ""
    });
  }

  function removerUsuario(index: number) {
    const novaLista = usuarios.filter((_, i) => i !== index);
    setUsuarios(novaLista);
  }

  return (
    <div className="container">
      <h1>Cadastro de Dados Pessoais</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={formData.idade}
          onChange={handleChange}
        />

        <button type="submit">Salvar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Idade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
              <td>{usuario.idade}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => removerUsuario(index)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;