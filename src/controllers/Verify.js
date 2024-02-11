import { VERIFY_MODEL } from '../models/Verify.js'

const sendOtpEmail = async (request, response, next) => {
    let result = await VERIFY_MODEL.sendOtpEmail(request.body)
    response.body = result
    next()
}

const verifyOtp = async (request, response, next) => {
    let result = await VERIFY_MODEL.verifyOtp(request.body)
    response.body = result
    next()
}
export const VERIFY_CONTROLLER = { sendOtpEmail, verifyOtp }