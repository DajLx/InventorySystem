const express = require("express");
const app = express();
const router= require("./routes")

app.use(express.json())
app.use("/", router)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("escuchando en el puerto 3000");
});
