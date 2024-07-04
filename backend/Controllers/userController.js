const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
      const newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
      };
      await UserModel.create(newUser);
      res.status(201).json({msg: "User created successfully"});
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      console.log(match);
      if (match) {
        const token = jwt.sign({ userId: user._id }, "secret", {
          expiresIn: "3h",
        });
        res.status(200).json({ token: token });
      } else {
        res.status(401).send({ msg: "Password is Wrong! try again." });
      }
    } else {
      res.status(401).send({ msg: "email is Wrong! try again." });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findOne({ _id: userId });
    await UserModel.deleteOne(user);
    res
      .status(200)
      .json(
        `The User with the email: ${user.email} deleted successfully.`
      );
  } catch (error) {
    console.log(error);
  }
};

const updateName = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    await UserModel.updateOne();
    res
      .status(200)
      .json(
        `The User with the email: "${user.email}" deleted successfully.`
      );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  getUsers,
  login,
  deleteUser,
  updateName,
};
