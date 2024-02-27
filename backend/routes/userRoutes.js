import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js'

// Public Routes
router.post('/login', UserController.userLogin)
router.post('/sendOtp', UserController.sendOtp)
router.post('/verifyOtp', UserController.verifyOtp)


export default router