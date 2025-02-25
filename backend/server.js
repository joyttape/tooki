import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animalRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 5000;

// Habilita o CORS
app.use(cors());

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Usa as rotas de animais
app.use('/api', animalRoutes);

// Usa as rotas de usuário
app.use('/api', userRoutes);

// Rota de exemplo para a raiz
app.get('/', (req, res) => {
    console.log("Banco de dados conectado!")
  res.send('Backend está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log("Banco de dados conectado!")

});
