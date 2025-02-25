import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import foto1 from '../componentes/Asset 1.png';
import '../AnimalList.css'; // Importando o CSS

const AnimalList = () => {
  const [animais, setAnimais] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/animais');
        setAnimais(response.data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };
    fetchAnimais();
  }, []);

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

      <h1 className="tit_list">Animais para Adoção</h1>
      <div className="grid">
        {animais.map(animal => (
          <div key={animal.id} className="card">
            <img src={animal.foto} alt={animal.nome} className="image" />
            <h3>{animal.nome}</h3>
            <p>{animal.raca}</p>
            <p >Descrição: {animal.descricao}</p>
            <button
              className="button"
              onClick={() => navigate(`/animais/${animal.id}`)} // Passa o ID corretamente
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
      <footer>
        <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
      </footer>
    </div>
  );
};

export default AnimalList;