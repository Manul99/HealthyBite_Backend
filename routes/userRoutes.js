const express = require('express');
const router = express.Router();
const multer = require('multer');
const { register, login, getAllUsers, getUserById } = require('../controllers/userControllers');
const { authMiddleware } = require('../middleware/auth');

const storage = multer.memoryStorage();
const upload = multer({storage:storage});

router.post('/',upload.single("profileImage"),register);
router.post('/login',login);
router.get('/getAll',getAllUsers);
router.get('/getById', authMiddleware,getUserById);
module.exports = router;