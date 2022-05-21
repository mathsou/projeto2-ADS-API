const app = require("./src/app");

const { PORT } = process.env;

try {
  app.listen(PORT, () => console.log(`Servidor Iniciado na porta ${PORT}`));
} catch (err) {
  console.log(`(erro ao inciar servidor) => ${err.message}`);
}
