import jwt from "jsonwebtoken";
import jwtConfig from '../config/jwtConfig.js'

const authenticateCompany = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Missing authorization" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid Token." });
    } else {
      return next();
    }
  });
};

export default authenticateCompany;