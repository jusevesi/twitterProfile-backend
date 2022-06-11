const express = require('express');
const getUserByID = require('../controllers/user');
const router = express.Router();

router.get('/user/:id',getUserByID);
router.patch('/user/:id');


module.exports = router;