const userService = require("../service/userService");
module.exports = {
  async create(req, res) {
    const { body } = req;
    const createdUser = await userService.registerNewUser(body);
    if (createdUser.error) {
      let code = createdUser.code
      delete createdUser.code
      res.status(code).json(createdUser);
    } else {
      res.status(200).json({ id: createdUser.id,  token: createdUser.token, message: "Usuário cadastrado com sucesso" });
    }
  },
  async login(req, res) {
    const { body } = req;
    const createdUser = await userService.loginUser(body);
    if (createdUser.error) {
      let code = createdUser.code
      delete createdUser.code
      res.status(code).json(createdUser);
    } else {
      res.status(200).json({ id: createdUser.id,  token: createdUser.token, message: "Login realizado com sucesso" });
    }
  },
};
