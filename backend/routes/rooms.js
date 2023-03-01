const express = require('express');
const router = express.Router();
const {
  PostRoom,
  GetAll,
  GetId,
  UpdateId,
  DeleteId,
  UpdateRoomAvailability,
} = require('../controllers/RoomsControl');
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require('../utils/verifyToken');

//Create
router.post('/:hotelid', verifyAdmin, PostRoom);

//Update
router.put('/:id', verifyAdmin, UpdateId);

router.put('/availability/:id', UpdateRoomAvailability);

//Delete
router.delete('/:id', verifyAdmin, DeleteId);
///:hotelid
// //Get By Id
router.get('/:id', GetId);

//Get ALl
router.get('/', GetAll);

module.exports = router;
