const { Sequelize } = require("sequelize");
require("dotenv").config();


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});



(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado com o banco de dados");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
})();

module.exports = sequelize;