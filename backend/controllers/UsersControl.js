const AuthSchema = require('../models/User');
const CreateError = require('../utils/error');

const GetAll = async (req, res, next) => {
  try {
    const getAll = await AuthSchema.find({});
    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

const GetId = async (req, res, next) => {
  try {
    const getUser = await AuthSchema.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

const UpdateId = async (req, res, next) => {
  try {
    const UpdateUser = await AuthSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdateUser);
  } catch (error) {
    next(error);
  }
};

const DeleteId = async (req, res, next) => {
  try {
    const DeleteUser = await AuthSchema.findByIdAndDelete(req.params.id);
    res.status(200).send('You have successfully deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = { GetAll, GetId, UpdateId, DeleteId };
