const md5 = require("md5");

const jwt = require("../middlewares/jwt");
const userRepository = require("../repository/userRepository");

module.exports = {
  async findUsers() {
    const { rows } = await userRepository.findUsers();
    return { data: rows };
  },
  async findOneUser(id) {
    const rows = await userRepository.findOneUser(id);
    return { data: rows };
  },
  async registerNewUser(fields) {
    if (await userRepository.findEmailExists(fields.email))
      return { error: true, code: 403, message: "E-mail já cadastrado" };
    const createdUser = await userRepository.registerUser({
      first_name: fields.first_name,
      last_name: fields.last_name,
      email: fields.email,
      password: md5(fields.password).toString(),
      phone: fields.phone,
      created_at: new Date(),
      modified_at: new Date(),
    });
    let token = jwt.sign({
      id: createdUser.id,
      first_name: createdUser.first_name,
      last_name: createdUser.last_name
    })
    return { ...createdUser.dataValues, token };
  },
  async loginUser(fields) {
    const user = await userRepository.findEmailExists(fields.email)
    if (!user)
      return { error: true, code: 404, message: "E-mail não cadastrado" };
    if(md5(fields.password).toString() != user.password)
      return { error: true, code: 403, message: "Senha incorreta" };
    let token = jwt.sign({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    })
    return { ...user.dataValues, token };
  },
  async updateUser(id, fields) {
    let payload = {
      name: fields.name,
      email: fields.email,
      phone: fields.phone
    };
    if (fields.password)
      payload.password = md5(fields.password);
    const rowsAffected = await userRepository.updateUser(id, payload);
    return rowsAffected[0];
  },
  async deleteUser(id) {
    const rowsAffected = await userRepository.deleteUser(id);
    return rowsAffected;
  }
};
