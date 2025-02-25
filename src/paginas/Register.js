import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import foto1 from '../componentes/Asset 1.png';
import '../Register.css';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        nome,
        email,
        senha,
      });
      console.log('Usuário cadastrado:', response.data);
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="container-register">
      <header className="cabecalho">
        <nav className="conteudo_cabecalho">
          <ul>
            <li className="menu"><img src={foto1} className="imagem" alt="Logo Tooki" /></li>
            <li className="menu">
              <button className="button" onClick={() => navigate('/login')}>
                Login
              </button>
            </li>
            <li className="menu">
              <button className="button" onClick={() => navigate('/cadastrar-animal')}>
                Cadastrar animal
              </button>
            </li>
            <li className="menu">
              <button className="button" onClick={() => navigate('/')}>
                Home
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="form-container">
        <div className="form-wrapper">
        <h1>Cadastro</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              className="inputre"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              className="inputre"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="inputre"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button className="bt_register" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>

      <footer>
        <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
      </footer>
    </div>
  );
};

export default Register;