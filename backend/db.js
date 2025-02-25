import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abre a conexão com o banco de dados
async function connect() {
  const db = await open({
    filename: './database.sqlite', // Arquivo do banco de dados
    driver: sqlite3.Database,
  });

  // Cria as tabelas se não existirem
  await setupDatabase(db);

  return db;
}

// Função para criar as tabelas
async function setupDatabase(db) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS animais (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      raca TEXT NOT NULL,
      anos INTEGER NOT NULL,
      descricao TEXT,
      foto TEXT
    );
  `);

  console.log('Tabelas criadas com sucesso!');
}

export default connect;