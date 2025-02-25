import express from 'express';
import connect from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const db = await connect();

    const result = await db.run(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );

    res.status(201).json({ id: result.lastID });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const db = await connect();

    const usuario = await db.get(
      'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
      [email, senha]
    );

    if (usuario) {
      res.json({ message: 'Login realizado com sucesso!', usuario });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

export default router;