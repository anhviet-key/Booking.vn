const HotelSchema = require('../models/Hotel');
const RoomSchema = require('../models/Room');

const CreateError = require('../utils/error');

const GetAll = async (req, res, next) => {
  const { min, max, maxPeople, rooms, ...otherValue } = req.query;
  try {
    const getAll = await HotelSchema.find({
      ...otherValue,
      maxPeople: { $lte: maxPeople },
      $group: {
        _id: 'ObjectId',
        rooms: {
          $count: {},
        },
      },
      cheapestPrice: { $gte: min || 1, $lte: max || 99999999 },
    }).limit(req.query.limit);
    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

const GetHotelRoom = async (req, res, next) => {
  try {
    const hotel = await HotelSchema.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return RoomSchema.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

const GetCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return HotelSchema.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

const GetCountByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelSchema.countDocuments({ type: 'hotel' });
    const apartmentCount = await HotelSchema.countDocuments({
      type: 'apartment',
    });
    const resortCount = await HotelSchema.countDocuments({ type: 'resort' });
    const villaCount = await HotelSchema.countDocuments({ type: 'villa' });
    const cabinCount = await HotelSchema.countDocuments({ type: 'cabin' });

    res.status(200).json([
      {
        type: 'khách sạn',
        sum: hotelCount,
      },
      {
        type: 'căn hộ',
        sum: apartmentCount,
      },
      {
        type: 'khu nghỉ mát',
        sum: resortCount,
      },
      {
        type: 'biệt thự',
        sum: villaCount,
      },
      {
        type: 'cabin',
        sum: cabinCount,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

const GetId = async (req, res, next) => {
  try {
    const getHotel = await HotelSchema.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

const PostId = async (req, res, next) => {
  const hotel = new HotelSchema(req.body);
  try {
    const savedHotel = await hotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

const UpdateId = async (req, res, next) => {
  try {
    const UpdateHotel = await HotelSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdateHotel);
  } catch (error) {
    next(error);
  }
};

const DeleteId = async (req, res, next) => {
  try {
    const DeleteHotel = await HotelSchema.findByIdAndDelete(req.params.id);
    res.status(200).send('You have successfully deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAll,
  GetId,
  PostId,
  UpdateId,
  DeleteId,
  GetCountByCity,
  GetCountByType,
  GetHotelRoom,
};

// function StoreControl() {
//   return {
//     //Get All
//     index: async (req, res) => {
//       try {
//         const getAll = await HotelSchema.find({});
//         res.status(200).json(getAll);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     },

//     //Get Id
//     getId: async (req, res) => {
//       // const hotel = new HotelSchema(req.body);
//       try {
//         const getHotel = await HotelSchema.findById(req.params.id);
//         res.status(200).json(getHotel);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     },

//     //Post Id
//     postId: async (req, res) => {
//       const hotel = new HotelSchema(req.body);
//       try {
//         const savedHotel = await hotel.save();
//         res.status(200).json(savedHotel);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     },

//     //Update Id
//     updateId: async (req, res) => {
//       try {
//         const UpdateHotel = await HotelSchema.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(UpdateHotel);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     },

//     //Delete Id
//     deleteId: async (req, res) => {
//       try {
//         const DeleteHotel = await HotelSchema.findByIdAndDelete(req.params.id);
//         res.status(200).send('You have successfully deleted');
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     },
//   };
// }

// class StoreControl {
//   //Get All
//   async index(req, res) {
//     try {
//       const getAll = await HotelSchema.find({});
//       res.status(200).json(getAll);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
//   //Get Id
//   async getId(req, res) {
//     // const hotel = new HotelSchema(req.body);
//     try {
//       const getHotel = await HotelSchema.findById(req.params.id);
//       res.status(200).json(getHotel);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }

//   //Post Id
//   async postId(req, res) {
//     const hotel = new HotelSchema(req.body);
//     try {
//       const savedHotel = await hotel.save();
//       res.status(200).json(savedHotel);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }

//   //Update Id
//   async updateId(req, res) {
//     try {
//       const UpdateHotel = await HotelSchema.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(UpdateHotel);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }

//   //Delete Id
//   async deleteId(req, res) {
//     try {
//       const DeleteHotel = await HotelSchema.findByIdAndDelete(req.params.id);
//       res.status(200).send('You have successfully deleted');
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }
