import { RESPONSE } from '../constants/response.js'
import { verifyRoute } from './Verify.js'
import { notification } from '../utilities/Notification.js'
import { __logger } from '../utilities/logger.js'


//  base route
const allRoutes = [
    {
        route: '/verify', path: verifyRoute,  // register
        // route:'/worker', path:'worker'
    }
]


export const ROUTE = (app) => {
    if (!app || !app.use) {
        console.log('[Error] route Initialization Failed')
    }


    allRoutes.forEach(routeObj => app.use(routeObj.route, routeObj.path))  // /user/register

    app.all('*', (request, response, next) => {
        const { statusCode } = RESPONSE.routeNotExist

        return response.status(statusCode).send(RESPONSE.routeNotExist)
    })

    app.use(async (error, request, response, next) => {

        const { statusCode } = RESPONSE.internalServerError
        RESPONSE.internalServerError.data.message = error.message
        if (!error) return
        __logger.info({ route: 'index.js', message: error?.stack?.toString() })
        await notification(error?.stack?.toString())
        return response.status(statusCode).send(RESPONSE.internalServerError)
    })


}    