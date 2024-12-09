const express = require('express');
const router = express.Router();
const { getUser, deleteUser, patchUser, getUsers } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/list', auth, getUsers);
router.get('/:id', auth, getUser);
router.delete('/:id',auth,deleteUser);
router.patch('/:id',auth,patchUser);
module.exports = router;