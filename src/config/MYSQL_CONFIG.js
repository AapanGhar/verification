

const {
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DB_NAME,
} = process.env


export const MYSQL_CONFIG = {
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DB_NAME
}


Object.keys(MYSQL_CONFIG).forEach(key =>{
    if(!MYSQL_CONFIG[key]){
        console.log(`[Missing]  MYSQLdb config  key : ${key}]`)
        process.exit(1)
    }
})