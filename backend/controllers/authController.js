const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

// ---------------- REGISTER ----------------
const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const [user] = await userModel.findUserByEmail(email);

    if (user.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.createUser(
      name,
      email,
      phone,
      hashedPassword
    );

    res.status(201).json({
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ---------------- LOGIN ----------------
const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const [user] = await userModel.findUserByEmail(email);

    if (user.length === 0) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user[0].password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  register,
  login,
};