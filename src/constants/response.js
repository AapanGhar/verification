export const RESPONSE = {
    successfulySend: {
        statusCode: 201,
        message: 'success',
        data: {
            status: true,
            code: 2001,
            message: 'Successfully send otp'
        }
    },
    invalidBody: {
        statusCode: 400,
        message: 'success',
        data: {
            status: false,
            code: 4000,
            message: ''
        }
    },
    userAlreadyExist: {
        statusCode: 400,
        message: 'success',
        data: {
            status: false,
            code: 4001,
            message: 'User already Exist'
        }
    },
    bodyShouldNotBeEmpty: {
        statusCode: 400,
        message: 'success',
        data: {
            status: false,
            code: 4002,
            message: 'Request body should not be Empty'
        }
    },
    invalidEmailOrPassword: {
        statusCode: 401,
        message: 'success',
        data: {
            status: false,
            code: 4003,
            message: 'Invalid Email or password'
        }
    },
    userNotFound: {
        statusCode: 404,
        message: 'success',
        data: {
            status: false,
            code: 4004,
            message: 'User not Found'
        }
    },
    loginSuccessfully: {
        statusCode: 200,
        message: 'success',
        data: {
            status: true,
            code: 4005,
            message: 'Successfully login'
        }
    },
    internalServerError: {
        statusCode: 500,
        message: 'success',
        data: {
            status: false,
            code: 4006,
            message: ''
        }
    },
    routeNotExist: {
        statusCode: 404,
        message: 'success',
        data: {
            status: false,
            code: 4007,
            message: "Route does not exist"
        }
    },
    serverError: {
        statusCode: 500,
        message: 'success',
        data: {
            status: true,
            code: 5001,
            message: 'Something went wrong...'
        }
    },
    otpVerify: {
        statusCode: 201,
        message: 'success',
        data: {
            status: true,
            code: 2000,
            message: 'Otp verified successfully'
        }
    },
    invalidOtp: {
        statusCode: 401,
        message: 'success',
        data: {
            status: true,
            code: 40000,
            message: 'Invalid Otp'
        }
    }
}