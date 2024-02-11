import { redisConnection } from '../../server.js'
import { verify } from '../constants/verify.js'
import { RESPONSE } from '../constants/response.js'
import { TEMPLATE_HELPER } from '../helpers/templates.js'
import { REDIS_MODEL } from './Redis.js'
import sendEmail from '../utilities/EmailSend.js'
const redis = new REDIS_MODEL.RedisClass(redisConnection)

const storeOtp = (email, otp) => {
    return redis.redisSetKey(email + verify.redisKey.otp, otp)
}

const getOtp = (email) => {
    return redis.redisGetKey(email + verify.redisKey.otp)
}

const sendEmails = (email, otp) => {
    return sendEmail(email, TEMPLATE_HELPER(otp))
}

const sendOtpEmail = async (body) => {
    const { email } = body
    let otp = generateOTP()
    let result = await Promise.all([storeOtp(email, otp), sendEmails(email, otp)])
    return result.length > 0 ? RESPONSE.successfulySend : RESPONSE.serverError
}

const verifyOtp = async (body) => {
    const { email, otp } = body

    let findOtp = getOtp(email)

    return parseInt(findOtp) === parseInt(otp) ? RESPONSE.otpVerify : RESPONSE.invalidOtp
}

export const VERIFY_MODEL = { sendOtpEmail, verifyOtp }
