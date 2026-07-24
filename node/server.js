const express = require("express");
const app = express();
const router = require("./routes");
const bd = require("./bd");
app.use(express.json());
app.use("/", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const iniciarServer = async () => {
  try {
    
    const conexionInicial=await bd.getConnection();
    conexionInicial.release()
    console.log("se conecto a la bd correctamente");
    app.listen(3000, () => {
      console.log("escuchando en el puerto 3000");
    });
  } catch (error) {
    console.error(error)
  }
};
iniciarServer();
