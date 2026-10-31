import pool from "../config/database.js";

// Listar usuários
export async function listarUsuario() {
  const resultado = await pool.query("SELECT * FROM usuarios");

  return resultado.rows;
}

// Criar usuário
export async function criarUsuario(nome, idade, email) {
  const resultado = await pool.query(
    `INSERT INTO usuarios (nome, idade, email) VALUES ($1, $2, $3) RETURNING *`,

    [nome, idade, email], // Array de valores para os parâmetros da query
  );

  return resultado.rows[0];
}

// Atualizar usuário
export async function atualizarUsuario(id, nome, idade, email) {
  const resultado = await pool.query(
    `UPDATE usuarios SET nome = $1, idade = $2, email = $3
    WHERE id = $4 RETURNING *`,

    [nome, idade, email, id]
  );

  return resultado.rows[0] || null; // Retorna null se o usuário não for encontrado
}

export async function excluirUsuario(id) {
  const resultado = await pool.query(
    `DELETE FROM usuarios WHERE id = $1 RETURNING *`,
    [id]
  );

  return resultado.rows[0] || null; // Retorna null se o usuário não for encontrado
}

