const typeRepository = require("../repository/typeRepository");


module.exports = {
  async findTypes() {
    const rows = await typeRepository.findTypes({
      atributes: ["id", "name"]
    });
    return { data: rows };
  }
};
