const express = require('express');
const {getUserById, updateUser} = require('../controllers/user');
const router = express.Router();

router.get('/user/:id',getUserById);
router.put('/user',updateUser);

module.exports = router;