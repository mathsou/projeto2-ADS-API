const jwt = require("./jwt");

module.exports = {
  async authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res
        .status(401)
        .send({ error: "Error", msg: "Token não enviado." });

    const [, token] = authHeader.split(" ");
    try {
      const decoded = await jwt.verify(token);
      req.payload = decoded;
      next();
    } catch (err) {
      return res.status(403).send({ error: "Error", msg: "Token inválido." });
    }
  },
};
