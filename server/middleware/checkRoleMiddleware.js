const jwt = require("jsonwebtoken");

module.exports = (role) => {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer the token
      if (!token) {
        return res.status(401).json({ message: "Пользователь не авторизован" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "Нет доступа" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }
  };
};
