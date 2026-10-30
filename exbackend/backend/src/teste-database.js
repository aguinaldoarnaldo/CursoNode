import "dotenv/config";
import pool from "./config/database.js";

async function listarUsuarios() {
    try {
        const resultado = await pool.query("SELECT * FROM usuarios WHERE idade > 23");

        console.log(resultado.rows);
    } catch (error) {
        console.log("Erro ao consultar utilizadores: ", error.message);
    } finally {
        await pool.end();
    }
}

listarUsuarios();