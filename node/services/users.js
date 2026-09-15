import pool from "../db.js";
import bcrypt from "bcrypt";

class userServices {
  // * We need to search for a user based on their email address to verify if the user actually exists.
  // * Since the user exists, we will take the hash stored in the database to compare it with the hash being passed to us in the request.
  // * If the hash matches, the login is successfully, otherwise, it returns null.

  static async login(email, password) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    console.log("rows: ", rows); // ! This console.log has to be deleted when the work has done.

    if (rows.length === 0) throw new Error("User not found.");
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.pass);

    console.log(isMatch); // ! This console.log has to be deleted when the work has done.

    if (!isMatch) throw new Error("Wrong password.");

    return { rol: user.rol, name: user.name, email };
  }
}

export default userServices;
