const RoomSchema = require('../models/Room');
const HotelSchema = require('../models/Hotel');

const PostRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new RoomSchema(req.body);
  try {
    const saveRoom = await newRoom.save();
    try {
      await HotelSchema.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(saveRoom);
  } catch (error) {
    next(error);
  }
};

const GetAll = async (req, res, next) => {
  try {
    const getAll = await RoomSchema.find({});
    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

const GetId = async (req, res, next) => {
  try {
    const getRoom = await RoomSchema.findById(req.params.id);
    res.status(200).json(getRoom);
  } catch (error) {
    next(error);
  }
};

const UpdateId = async (req, res, next) => {
  try {
    const UpdateRoom = await RoomSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdateRoom);
  } catch (error) {
    next(error);
  }
};

const UpdateRoomAvailability = async (req, res, next) => {
  try {
    await RoomSchema.updateOne(
      { 'roomNumber._id': req.params.id },
      {
        $push: {
          'roomNumber.$.unavailable': req.body.dates,
        },
      }
    );
    res.status(200).json('Room status has been updated.');
  } catch (error) {
    next(error);
  }
};

const DeleteId = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await RoomSchema.findByIdAndDelete(req.params.id);
    try {
      await HotelSchema.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).send('You have successfully deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  PostRoom,
  GetAll,
  GetId,
  UpdateId,
  DeleteId,
  UpdateRoomAvailability,
};
