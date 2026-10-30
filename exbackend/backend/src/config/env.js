import  "dotenv/config";

const PORT = process.env.PORT || 3000;
if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("Porta inválida. A porta deve ser um número inteiro entre 1 e 65535.");
}

export { PORT };