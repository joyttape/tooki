import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import foto1 from '../componentes/Asset 1.png';
import foto2 from "../componentes/foto3.png";
import foto3 from "../componentes/qrcode.png";
import foto4 from "../componentes/escolha1.png";
import foto5 from "../componentes/escolha2.png";
import foto6 from "../componentes/escolha3.png";
import foto7 from "../componentes/Asset 8.png";
import foto8 from "../componentes/Asset 10.png";
import foto9 from "../componentes/coracao.png";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

          <header class="cabecalho">
            <nav class="conteudo_cabecalho">
              <ul>
                <li class="menu"><img src={foto1} class="imagem" alt="Logo Tooki" /></li>
                <li class="menu">
                  <button
                    class="button"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                </li>
                <li class="menu">
                  <button
                    class="button"
                    onClick={() => navigate('/cadastrar-animal')}
                  >
                    Cadastrar animal
                  </button>
                </li>
                <li class="menu">
                  <button
                    class="button"
                    onClick={() => navigate('/')}
                  >
                    home
                  </button>
                </li>
              </ul>
            </nav>
          </header>

      <div className='conheca'>
          <h1 className="t1conheca">Bem-vindo(a) ao Tooki</h1>
           <p className="subconheca1">
             Sistema de adoção de animais!
           </p>
           <div className='botao'>
            <button
            className="button"
            onClick={() => navigate('/animais')}
            >
            Ver Animais Disponíveis
            </button> 
           </div>
          
      </div>

      <div className='oquesomos'>
        <div className="text">
        <h2>Tooki - Quem Somos?</h2>
          <p>O Tooki surgiu como uma iniciativa de um grupo de pessoas apaixonadas por animais, com o objetivo de ajudar aqueles em situação de rua.
             Em parceria com várias ONGs, já acolhemos mais de 3.000 animais em apenas dois anos de atuação. Com a sua colaboração, podemos continuar transformando a vida desses animais, oferecendo a eles uma nova chance de serem felizes.</p>

        </div>
        <img className='logo' src={foto2} alt="Imagem Tooki" />
      </div>
      
      <div className='doacoes'>
        <div className="text">
          <h2>Doações</h2>
          <p>Pix: 123e4567-e89b-12d3-a456-426614174000</p>
          <p> </p>
          <p>Banco do Brasil</p>
          <p>Agência: 1234 </p>
          <p>Conta: 56789-0 </p>
          <p>Beneficiário: TOOKI ONG </p>
        </div>
        <div className='foto_qr'>
        <img src={foto3} alt="QR Code Doações" />
        <p>Código qr acima!</p>
        </div>
      </div>

      
      <div className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Por que nos escolher?</h2>
            <p>Nossa missão como ong é de diminuir o número de animais domésticos abandonados na rua, damos todo o cuidado que eles merecem incluindo higiene, alimentação e vacinas. Já contamos 
            com ajuda de mais de 100 voluntários que facilitam o desenvolvimento do projeto, incluindo todas as garantias de adoção.</p>
          </div>
          <div className="us_container">
              <img className='foto_us1' src={foto4} alt='foto tooki 1' />
              <img className="foto_us2" src={foto5} alt="foto tooki 2" />
              <img className='foto_us3' src={foto6} alt="foto tooki 3" />
          </div>
          <p>    </p>
        </div>
      </div>

      <section class="coisas">
              <div class="conteudo_coisas">
                        <img src={foto7} alt='logo gato tooki' className='imagem_coisa'></img>
                      <h2 class="h2_conteudo">Telefone</h2>
                      <p class="p_pedido">+55 09 99221-2805</p>
              </div>
              <div class="conteudo_coisas">
                        <img src={foto9} alt="coração branco" className='imagem_coisa'></img>
                  <h2 class="h2_conteudo">Endereço</h2>
                 <p class="p_pedido">Rua Raimundo Branco do Norte</p>
                 <p class="p_pedido">Distrito 12</p>
              </div>
              <div class="conteudo_coisas">
                  <img src={foto8} alt="logo cachorro tooki" className='imagem_coisa'></img>
                <h2 class="h2_conteudo">Atendimento</h2>
                <p class="p_pedido">Seg. á Sáb.</p>
                <p class="p_pedido">6h ás 22h</p>
               </div>
            </section>
      <footer>
        <p>João Pedro Gundim Guimarães/ ADS 4° Período</p>
      </footer>
    </div>
  );
};

export default Home;