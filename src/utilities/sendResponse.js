import {RESPONSE} from '../constants/response.js'

const {routeNotExist} = RESPONSE

const sendResponse = (request, response) => {
    console.log('send response', response.body)
    const { body = {} } = response
    const { statusCode } = body

    if(!request.route?.path){
        const {statusCode} = routeNotExist
        return response.status(statusCode).send(routeNotExist)
    }
    return response.status(statusCode).send(body)
}

export const SEND_RESPONSE = { sendResponse }