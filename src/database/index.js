require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const sequelizeInstance = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

sequelizeInstance
  .authenticate({ logging: false })
  .then(() => console.log(`Conectado ao banco '${DB_NAME}'`))
  .catch(err => {
    console.log(`(erro ao conectar ao banco) => ${err.message}`);
    throw err;
  });

module.exports = sequelizeInstance;
