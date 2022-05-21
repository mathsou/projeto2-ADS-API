const { object, string } = require('yup');


module.exports = {
  async registerUserValidator(req, res, next) {
    try {
      const userSchema = object().shape({
        first_name: string("name deve ser uma string")
          .required("'first_name' é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'last_name' deve conter somente caracteres válidos."
          ),
        last_name: string("name deve ser uma string")
          .required("'last_name' é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'last_name' deve conter somente caracteres válidos."
          ),
        email: string("'email' deve ser uma string")
          .email("digite um 'email' válido")
          .required("'email' é um campo obrigatório"),
        password: string()
          .required("'password' é um campo obrigatório"),
        phone: string("'phone' deve ser uma string")
          .required("'phone' é um campo obrigatório")
          .length(11, "'phone' deve ter 11 caracteres")
          .matches("^[0-9]*$", "'phone' só pode conter números")
      });

      const { body } = req;
      await userSchema.validate(body);

      next();
    } catch (error) {
      res.status(400).json({ error: true, message: error.message });
    }
  },
  async loginUserValidator(req, res, next) {
    try {
      const userSchema = object().shape({
        email: string("'email' deve ser uma string")
          .email("digite um 'email' válido")
          .required("'email' é um campo obrigatório"),
        password: string()
          .required("'password' é um campo obrigatório"),
      });

      const { body } = req;
      await userSchema.validate(body);

      next();
    } catch (error) {
      res.status(400).json({ error: true, message: error.message });
    }
  },
};
