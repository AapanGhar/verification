const joiValidate = (schema, body, next) => {
    let { value, error } = schema.validate(body)
    console.log(value, error)
    if (error) {
        RESPONSE.invalidBody.data.message = error.message
        const { statusCode } = RESPONSE.invalidBody
        return response.status(statusCode).send(RESPONSE.invalidBody)
    }
    next()
}

export default joiValidate