require("./db/database");
const express = require("express");
const cors = require("cors");
const taskRouters = require("./router/tasksRouter");

const sequelize = require("./db/database"); 

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("📌 Banco de dados sincronizado!");
  } catch (error) {
    console.error("❌ Erro ao sincronizar banco de dados:", error);
  }
})();

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Servidor de Pé");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", taskRouters);

