import { Router } from 'express'
import { USER_CONTROLLER } from '../controllers/User.js'
import { REQUEST_BODY_VALIDATER } from '../middleware/validator.js'
import { SEND_RESPONSE } from '../utilities/sendResponse.js'
import { watchTower } from '../helpers/watchTower.js'
const { emailValidator } = REQUEST_BODY_VALIDATER
const { sendResponse } = SEND_RESPONSE
const { sendOtpEmail } = USER_CONTROLLER
const router = Router()

router.post('/sendOtpEmail', watchTower(emailValidator), watchTower(sendOtpEmail))
router.use(sendResponse)

export const userRoute = router