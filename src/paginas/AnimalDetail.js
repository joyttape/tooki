import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importe useNavigate
import axios from 'axios';
import foto1 from '../componentes/Asset 1.png';
import '../AnimalDetail.css'; // Importando o CSS

const AnimalDetail = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate(); // Defina o navigate

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        console.log('Buscando animal com ID:', id); // Log do ID
        const response = await axios.get(`http://localhost:5000/api/animais/${id}`);
        console.log('Resposta do backend:', response.data); // Log da resposta
        setAnimal(response.data);
      } catch (error) {
        console.error('Erro ao buscar animal:', error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) return <div>Carregando...</div>;

  return (
    <div className="container-detail">
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

      <h1 className="tdetail">Conheça: {animal.nome}</h1>
      <div className="detail-container">
        <div className="info">
        <h1 className="nome">{animal.nome}</h1>
          <p><strong>Raça:</strong> {animal.raca}</p>
          <p><strong>Idade:</strong> {animal.anos} anos</p>
          <p><strong>Descrição:</strong> {animal.descricao}</p>
          <button className="button">Entrar em Contato</button>
        </div>
        <img src={animal.foto} alt={animal.nome} className="image-detail" />
      </div>

      <footer>
        <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
      </footer>
    </div>
  );
};

export default AnimalDetail;