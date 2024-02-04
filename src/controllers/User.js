import { USER_MODEL } from '../models/User.js'

const sendOtpEmail = async (request, response, next) => {
    console.log(b)
    console.log('cont', request.body)
    let result = await USER_MODEL.sendOtpEmail(request.body)
    response.body = result
    next()
    // return response.status(result.statusCode).send(result)
}

export const USER_CONTROLLER = { sendOtpEmail }