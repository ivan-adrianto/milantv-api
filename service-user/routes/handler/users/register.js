const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      fullname: "string|empty:false",
      email: "email|empty:false",
      username: "string|empty:false",
      password: "string|min:6",
    };
  
    const validate = v.validate(req.body, schema);
  
    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }
  
    const userEmail = await User.findOne({
      where: { email: req.body.email },
    });
  
    if (userEmail) {
      return res.status(409).json({
        status: "error",
        message: "email already exist",
      });
    }
  
    const userUsername = await User.findOne({
      where: { username: req.body.username },
    });
  
    if (userUsername) {
      return res.status(409).json({
        status: "error",
        message: "username already exist",
      });
    }
  
    const password = await bcrypt.hash(req.body.password, 10);
  
    const data = {
      password,
      fullname: req.body.fullname,
      email: req.body.email,
      username: req.body.username,
      role: "user",
    };
  
    const createdUser = await User.create(data);
  
    return res.json({
      status: "success",
      data: {
        id: createdUser.id,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    })
  }
};
