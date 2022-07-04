const express = require('express');
const { getSingleUser,getAllUsers} = require('../controllers/user.js')

const User = require('../models/User');
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers")

const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id',checkUserExist,getSingleUser)

module.exports = router;