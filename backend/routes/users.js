const express = require('express');
const router = express.Router();
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require('../utils/verifyToken');
const {
  GetAll,
  GetId,
  UpdateId,
  DeleteId,
} = require('../controllers/UsersControl');

// router.get('/checkauthentication', verifyToken, (req, res) => {
//   res.send('hello user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res) => {
//   res.send('hello user, you are logged in and you can delete you account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res) => {
//   res.send('hello Admin, you are logged in and you can delete all account');
// });

//Update
router.put('/:id', verifyUser, UpdateId);

//Delete
router.delete('/:id', verifyUser, DeleteId);

// //Get By Id
router.get('/:id', verifyUser, GetId);

//Get ALl
router.get('/', verifyAdmin, GetAll);

module.exports = router;
