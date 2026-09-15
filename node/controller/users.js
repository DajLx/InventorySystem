import jwt from "jsonwebtoken";
import userServices from "../services/users.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userServices.login(email, password);

    res.status(200).send({ ...user, found: true });
  } catch (err) {
    const jsonError = { error: err.message, found: false };

    if (err.message === "User not found.")
      return res.status(401).send(jsonError);
    return res.status(500).send(jsonError);
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await userServices.signup(username, email, password);

    res.sendStatus(201);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
