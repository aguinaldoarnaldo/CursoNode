import dotenv from "dotenv/config.js";

const PORT = process.env.PORT || 3000;

if (!Number.isInteger(PORT) || PORT <1 || PORT > 65535) {
    throw new Error("PORT inválido");  
}
export { PORT };