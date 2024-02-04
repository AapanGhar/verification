
const {
    REDIS_USER,
    REDIS_PASSWORD,
    REDIS_HOST,
    REDIS_PORT
} = process.env


export const REDIS_CONFIG = {
    REDIS_USER,
    REDIS_PASSWORD,
    REDIS_HOST,
    REDIS_PORT,
   
}

Object.keys(REDIS_CONFIG).forEach(key => {
    if(!REDIS_CONFIG[key]){
        console.log(`[Missing ] redis config key: ${key}`)
        process.exit(1)
    }
})