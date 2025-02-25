import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import foto1 from '../componentes/Asset 1.png';
import '../AnimalForm.css';

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    raca: '',
    anos: '',
    descricao: '',
    foto: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/animais', formData);
      console.log('Animal cadastrado:', response.data);
      alert('Animal cadastrado com sucesso!');
      navigate('/animais');
    } catch (error) {
      console.error('Erro ao cadastrar animal:', error);
      alert('Erro ao cadastrar animal.');
    }
  };

  return (
    <div className="container">
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
        <div className="registerform-wrapper">
        <h1>Cadastrar Animal</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="raca"
              placeholder="Raça"
              value={formData.raca}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="number"
              name="anos"
              placeholder="Idade"
              value={formData.anos}
              onChange={handleChange}
              className="input"
              required
            />
            <textarea
              name="descricao"
              placeholder="Descrição"
              value={formData.descricao}
              onChange={handleChange}
              className="textarea"
              required
            />
            <input
              type="text"
              name="foto"
              placeholder="URL da Foto"
              value={formData.foto}
              onChange={handleChange}
              className="input"
              required
            />
            <button type="submit" className="bt_animal">
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      <footer>
        <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
      </footer>
    </div>
  );
};

export default AnimalForm;