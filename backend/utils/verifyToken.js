const jwt = require('jsonwebtoken');
const CreateError = require('../utils/error');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(CreateError(401, 'You are not authenticated!'));
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(CreateError(403, 'Token is invalid!'));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, 'You are not authrized!'));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, 'You are not authrized!'));
    }
  });
};
module.exports = { verifyToken, verifyUser, verifyAdmin };
