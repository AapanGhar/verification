

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT
} = process.env


export const MONGO_CONFIG = {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT
}


Object.keys(MONGO_CONFIG).forEach(key =>{
    if(!MONGO_CONFIG[key]){
        console.log(`[Missing mongodb config key : ${key}]`)
        process.exit(1)
    }
})