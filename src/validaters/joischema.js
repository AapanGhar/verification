import joi from 'joi'

let emailSchema = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } })
})

export const JOI_SCHEMA = { emailSchema }