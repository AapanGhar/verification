import { JOI_SCHEMA } from '../validaters/joischema.js'
import { RESPONSE } from '../constants/response.js'
import joiValidate from './JoiValidate.js'
const { emailSchema, otpSchema } = JOI_SCHEMA

const emailValidator = (request, response, next) => {
    const { body } = request
    if (Object.keys(body).length == 0) {
        const { statusCode } = RESPONSE.bodyShouldNotBeEmpty
        return response.status(statusCode).send(RESPONSE.bodyShouldNotBeEmpty)
    }
    return joiValidate(emailSchema, body, next)
}

const otpValidator = (request, response, next) => {
    const { body } = request
    if (Object.keys(body).length == 0) {
        const { statusCode } = RESPONSE.bodyShouldNotBeEmpty
        return response.status(statusCode).send(RESPONSE.bodyShouldNotBeEmpty)
    }
    return joiValidate(otpSchema, body, next)
}
export const REQUEST_BODY_VALIDATER = { emailValidator, otpValidator }