const AuthSchema = require('../models/User');
const CreateError = require('../utils/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new AuthSchema({
      // username: req.body.username,
      // email: req.body.email,
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send('User saved successfully');
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  try {
    const user = await AuthSchema.findOne({ username: req.body.username });

    if (!user) return next(CreateError(404, 'username not found'));

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordCheck)
      return next(CreateError(400, 'username or password incorrect'));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherValue } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherValue }, isAdmin });
  } catch (error) {
    next(error);
  }
};

module.exports = { Register, Login };
