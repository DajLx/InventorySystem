const mysql= require("mysql2/promise");
const url= "mysql://root:root@localhost:3306/inventarioproyecto"
const client = mysql.createPool(url);

module.exports= client;