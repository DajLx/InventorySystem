import "dotenv/config";
import express, { json } from "express";
import routes from "./routes/index.js";
import db from "./db.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json());
app.use("/", routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const startServer = async () => {
  try {
    const conn = await db.getConnection();
    console.log("Database connected successfully!");
    conn.release();

    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  } catch (err) {
    console.error("Failed to connect to database: ", err.message);
    process.exit(1);
  }
};

startServer();
