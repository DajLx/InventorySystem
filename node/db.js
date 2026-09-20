import mysql from "mysql2/promise";

const client = mysql.createPool(process.env.DB_URL);

export default client;
