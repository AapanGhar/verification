import { MongoClient } from 'mongodb'
import { Redis } from 'ioredis'
import { DataSource } from 'typeorm'
import { MYSQL_CONFIG } from '../config/MYSQL_CONFIG.js'
import fs from 'fs'
import path from 'path'
import { userSchema } from '../entities/userSchema.js'
import { cwd } from 'process'

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_DB_NAME } = MYSQL_CONFIG


// const basePath = path.join(cwd(), '/src/entities');
// console.log( 'pppppppppppppppppppppppp',basePath)
// const entities = fs
//   .readdirSync(basePath)
//   .map((file) => import(path.join(basePath, file)));


let option = {
    useNewUrlParser: true,
    useUnifiedTopology: true

}

const getMongoConnection = async (url) => {
    let client = new MongoClient(url, option)
    return await client.connect()
}

const getRedisConnection = async (url) => {
    let client = new Redis(url)
    return client
}

const mysqlConnection = () => {
    return new DataSource({
        type: "mysql",
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        username: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DB_NAME,
        synchronize: true,
        logging: true,
        entities: [userSchema]

    })
}


export const CONNECTION = { getMongoConnection, getRedisConnection, mysqlConnection }