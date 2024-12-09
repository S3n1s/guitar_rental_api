const express = require('express');
const router = express.Router();
const { getUser, deleteUser, putUser, getUsers } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/:id', auth, getUser);
router.delete('/:id',auth,deleteUser);
router.put('/:id',auth,putUser);
router.get('/list', auth, getUsers);
module.exports = router;