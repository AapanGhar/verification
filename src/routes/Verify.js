import { Router } from 'express'
import { VERIFY_CONTROLLER } from '../controllers/Verify.js'
import { REQUEST_BODY_VALIDATER } from '../middleware/validator.js'
import { SEND_RESPONSE } from '../utilities/sendResponse.js'
import { watchTower } from '../helpers/watchTower.js'
const { emailValidator, otpValidator } = REQUEST_BODY_VALIDATER
const { sendResponse } = SEND_RESPONSE
const { sendOtpEmail, verifyOtp } = VERIFY_CONTROLLER
const router = Router()

router.post('/sendOtpEmail', watchTower(emailValidator), watchTower(sendOtpEmail))
router.get('/verifyOtp', watchTower(otpValidator), watchTower(verifyOtp))
router.use(sendResponse)

export const verifyRoute = router