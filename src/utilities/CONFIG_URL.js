
// import {MONGO_CONFIG, REDIS_CONFIG } from '../config'

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT } = process.env
const { REDIS_USER, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = process.env
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } = process.env



const getMongoUrl = () => {
    return `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`

}

const getRedisUrl = () => {
    return `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
}


const getMysqlConfiguration = () => {
    return `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}`
    
}

export const CONFIG_URL = { getMongoUrl, getRedisUrl, getMysqlConfiguration }