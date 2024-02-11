import joi from 'joi'

let emailSchema = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } })
})

let otpSchema = joi.object({
    otp: joi.number().required().min(6).max(6),
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } })
})
export const JOI_SCHEMA = { emailSchema, otpSchema }