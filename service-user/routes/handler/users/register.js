const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");
const { default: axios } = require("axios");
const v = new Validator();
const { GATEWAY_URL } = process.env;

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
        message: validate[0].message,
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
    let avatar = "";
    if (req.body.photo) {
      try {
        avatar = await axios.post(`${GATEWAY_URL}/media`, {
          image: req.body.photo,
        });
      } catch (error) {
        return res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
    }

    const data = {
      password,
      fullname: req.body.fullname,
      email: req.body.email,
      username: req.body.username,
      avatar: avatar ? avatar.data.data.image : "",
      role: "user",
    };

    const createdUser = await User.create(data);

    return res.json({
      status: "success",
      data: {
        id: createdUser.id,
        fullname: createdUser.fullname,
        email: createdUser.email,
        role: createdUser.role,
        avatar: createdUser.avatar,
        username: createdUser.username,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
