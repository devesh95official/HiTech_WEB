const express = require('express');
const router = express.Router();
const {getUsers,postUsers,getUserById,updateUserById,deleteUserById} = require('../controllers/users');


router.get('/',getUsers);
router.post('/',postUsers);

router.get('/:id',getUserById);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);

module.exports = router;