import express from 'express';
import connect from '../db.js';

const router = express.Router();

router.post('/animais', async (req, res) => {
  try {
    const { nome, raca, anos, descricao, foto } = req.body;
    const db = await connect();

    
    const result = await db.run(
      'INSERT INTO animais (nome, raca, anos, descricao, foto) VALUES (?, ?, ?, ?, ?)',
      [nome, raca, anos, descricao, foto]
    );
    
    res.status(201).json({ id: result.lastID });
  } catch (error) {
    console.error('Erro ao cadastrar animal:', error);
    res.status(500).json({ message: 'Erro ao cadastrar animal' });
  }
});

router.get('/animais', async (req, res) => {
    try {
      const db = await connect();
      console.log('Conexão com o banco de dados estabelecida.'); 
      const animais = await db.all('SELECT * FROM animais');
      console.log('Animais encontrados:', animais);
      res.json(animais);
    } catch (error) {
      console.error('Erro ao buscar animais:', error);
      res.status(500).json({ message: 'Erro ao buscar animais' });
    }
  });

  router.get('/animais/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const db = await connect();
  
      const animal = await db.get('SELECT * FROM animais WHERE id = ?', [id]);
  
      if (animal) {
        res.json(animal);
      } else {
        res.status(404).json({ message: 'Animal não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar animal:', error);
      res.status(500).json({ message: 'Erro ao buscar animal' });
    }
  });

export default router;