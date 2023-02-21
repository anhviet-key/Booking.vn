const express = require('express');
const router = express.Router();
const {
  GetAll,
  GetId,
  PostId,
  UpdateId,
  DeleteId,
  GetCountByCity,
  GetCountByType,
  GetHotelRoom,
} = require('../controllers/HotelsControl');
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require('../utils/verifyToken');

//Create
router.post('/', verifyAdmin, PostId);

//Update
router.put('/:id', verifyAdmin, UpdateId);

//Delete
router.delete('/:id', verifyAdmin, DeleteId);

// //Get By Id
router.get('/find/:id', GetId);

//Get ALl
router.get('/', GetAll);
//Get countByCity
router.get('/countByCity', GetCountByCity);
//Get countByType
router.get('/countByType', GetCountByType);

router.get('/room/:id', GetHotelRoom);

module.exports = router;
