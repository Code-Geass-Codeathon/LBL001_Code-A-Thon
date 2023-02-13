import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;
 
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication Failed!!" });
  }
};
