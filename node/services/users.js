import bcrypt from "bcrypt";
import pool from "../db.js";

class UserServices {
  static async login(email, password) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) throw new Error("User not found.");
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error("Wrong password.");

    return { rol: user.rol, name: user.name, email };
  }

  static async signup(username, email, password) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length !== 0) throw new Error("This email is already used.");
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [insertResult] = await pool.query(
      "INSERT INTO users (name, email, password, rol) VALUES (?,?,?,'user')",
      [username, email, hashedPassword],
    );

    if (!insertResult.insertId)
      throw new Error("The user could not be created for some reason.");
  }
}

export default UserServices;
