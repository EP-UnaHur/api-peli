const express = require("express");
const routes = require("./routes");
const { genericMiddleware } = require("./middlewares");
const db = require("./models");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use(genericMiddleware.requestTime);
app.use(routes.seriesRoute);
app.use(routes.usuariosRoute);
app.listen(PORT, async () => {
  console.log(`Aplicacion iniciada en el puerto ${PORT}`);
  //Esto lo hacemos solo en desarrollo para sincronizar el modelo con la db
  // Descomentar solo cuando hay cambios en el modelo
  // ojo que se dropean todas las tablas
  //db.sequelize.sync({ force: true });
});
