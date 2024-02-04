import 'reflect-metadata'
import { userSchema } from './src/entities/userSchema.js'
import { MONGO_MODEL, REDIS_MODEL } from './src/models/index.js'
import { CONFIG_URL } from './src/utilities/index.js'
import { CONNECTION } from './src/utilities/index.js'
import { __logger } from './src/utilities/logger.js'

const { MONGO_CONNECTION_URI, REDIS_CONNECTION_URI } = process.env
const { MongoClass } = MONGO_MODEL
const { RedisClass } = REDIS_MODEL


const { getMongoUrl } = CONFIG_URL
console.log('mongoUrl=', getMongoUrl())
export let mongoConnection;
export let redisConnection;
export let mysqlConnection;




const DBConnection = async () => {
    try {

        __logger.info({ DBConnection: ' Entered into DBConnection' })
        // let mongoclient = await CONNECTION.getMongoConnection(MONGO_CONNECTION_URI)
        // mongoConnection = new MongoClass(mongoclient)
        let redisClient = await CONNECTION.getRedisConnection(REDIS_CONNECTION_URI)
        redisConnection = new RedisClass(redisClient)
        let mysqlClient = await CONNECTION.mysqlConnection().initialize()
        mysqlConnection = await mysqlClient.getRepository(userSchema)
        console.log('Mongodb connection successful ')
        console.log('Redis connection successful')
        console.log('MYSQLdb connection successful')
        __logger.info({ DBConnection: 'All DBConnection successful' })

    } catch (error) {
        __logger.error({ DBConnection: 'catch block error', error: error.toString(), stack: error.stack.toString() })
        console.log("🚀 ~ DBConnection ~ err̥or:", error)

    }
}






const startServer = async () => {
    try {
        await DBConnection()
        let app = await import('./App.js')

    } catch (error) {
        console.log("🚀 ~ file: server.js:25 ~ startServer ~ err̥or:", error)

    }

}

startServer()