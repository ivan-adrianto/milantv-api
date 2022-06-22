const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();
const { default: axios } = require("axios");
const { GATEWAY_URL } = process.env;

module.exports = async (req, res) => {
  try {
    const schema = {
      fullname: "string|empty:false",
      email: "email|empty:false",
      username: "string|empty:false",
      avatar: "string|optional",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    const email = req.body.email;
    if (email) {
      const checkEmail = await User.findOne({
        where: { email },
      });

      if (checkEmail && email !== user.email) {
        return res.status(409).json({
          status: "error",
          message: "email already exist",
        });
      }
    }
    const username = req.body.username;
    if (username) {
      const checkUsername = await User.findOne({
        where: { username },
      });
      if (checkUsername && username !== user.username) {
        return res.status(409).json({
          status: "error",
          message: "username already exist",
        });
      }
    }
    let avatar = "";
    if (req.body.photo) {
      try {
        const res = await axios.post(`${GATEWAY_URL}/media`, {
          image: req.body.photo,
        });
        avatar = res.data.data.image
      } catch (error) {
        return res.status(500).json({
          status: "error",
          message: error.response?.data?.message || error.message,
        });
      }
    }

    await user.update({
      fullname: req.body.fullname,
      email,
      username,
      avatar,
    });

    return res.json({
      status: "success",
      data: {
        id: user.id,
        fullname: req.body.fullname,
        email,
        username,
        avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
