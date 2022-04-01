import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';

// eslint-disable-next-line consistent-return
const authenticateCompany = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing authorization' });
  }

  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, jwtConfig.secret, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid Token.' });
    }

    return next();
  });
};

export default authenticateCompany;
