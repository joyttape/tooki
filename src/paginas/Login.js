import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import foto1 from '../componentes/Asset 1.png';
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        senha,
      });
      console.log('Login realizado:', response.data);
      alert('Login realizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login.');
    }
  };

  return (
    <div className='container_login'>
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

    <div className='form-container'>
      
      <div className='form-wrapper'>
      <h1>Login</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            className='inputlo'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='inputlo'
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <p>Não possui uma conta? <a href="./register">Crie aqui!</a></p>
          <button className="bt_login" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  
    <footer>
      <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
    </footer>
  </div>
  );
};

export default Login;