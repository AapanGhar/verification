import { mongoConnection, redisConnection, mysqlConnection } from '../../server.js'
import { COMMON_CONSTANT } from '../constants/common.js'
import { RESPONSE } from '../constants/response.js'
import { COMMON_HELPER } from '../helpers/commonHelper.js'
import { USER_HELPER } from '../helpers/user.js'

const { SALT_ROUND, JWT_EXPIRE, JWT_SECRET_KEY } = process.env
const { COLLECTION } = COMMON_CONSTANT
const { uuidGenerator, generateOTP } = COMMON_HELPER
const { createDbObject } = USER_HELPER


const storeOtp = () => {

}

const sendEmail = () => {

}

const sendOtpEmail = async (body) => {

    const { email } = body

    let otp = generateOTP()
    Promise.all

    // let dbResult = await mysqlConnection.create(body)
    // console.log('--------------', dbResult)
    // await mysqlConnection.save(dbResult)
    // let all = await mysqlConnection.find()
    // console.log('-------------dhfhjhfj', all)
    // let encryptedPassword = await hash(password, parseInt(SALT_ROUND))
    // const userExit = await mongoConnection.mongoFindOne(currentDbName(), COLLECTION.USER, { email })

    // if (userExit) {
    //     return RESPONSE.userAlreadyExist
    // }
    // let userCount = await redisConnection.redisGetKey('userCount')
    // console.log('usercount from redis', userCount)
    // if (!userCount) {
    //     userCount = await mongoConnection.mongoDocumentCount(currentDbName(), COLLECTION.USER)
    //     console.log('user count from db', userCount)
    // }
    // await redisConnection.redisSetKey('userCount', parseInt(userCount) + 1)
    // body.RollNumber = userCount + 1
    // body.password = encryptedPassword
    // body.userId = uuidGenerator()
    // let dbObject = createDbObject(body)
    // await mongoConnection.mongoInsertOne(currentDbName(), COLLECTION.USER, dbObject)
    // RESPONSE.successfulyCreated.data.userId = uuidGenerator()
    // return RESPONSE.successfulyCreated
}

const signIn = async (body) => {
    const { email, password } = body

    let userExist = await mongoConnection.mongoFindOne(currentDbName(), COLLECTION.USER, { email })

    if (!userExist) {
        return RESPONSE.invalidEmailOrPassword
    }

    const { password: dbpassword, userId } = userExist
    let validPassword = await compare(password, dbpassword)
    if (!validPassword) {
        return RESPONSE.invalidEmailOrPassword
    }
    let jwtOption = (Date.now() / 1000) + parseInt(JWT_EXPIRE)
    let token = jwt.sign({ userId, exp: jwtOption }, JWT_SECRET_KEY)
    RESPONSE.loginSuccessfully.data.token = token

    return RESPONSE.loginSuccessfully
}


const getUsers = async (page, limit) => {
    let getUsersFromDb = await mongoConnection.mongoFind(currentDbName(), COLLECTION.USER, page, limit)
    return getUsersFromDb
}

const updateUser = async (RollNumber, body) => {
    console.log('roll', typeof RollNumber, RollNumber)
    let updatedRecord = await mongoConnection.mongoFindOneAndUpdate(currentDbName(), COLLECTION.USER, RollNumber, body)
    console.log('updated record', updatedRecord)
    return updatedRecord
}



export const USER_MODEL = { sendOtpEmail, signIn, getUsers, updateUser }




// /sendOtp    // input phoneNumber
   //  /veryfyOtp
    //   /changePassword
         // /forgotPassword  