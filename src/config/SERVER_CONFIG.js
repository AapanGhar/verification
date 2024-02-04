

const {
    APP_NAME,
    APP_VERSION,
    PORT,
    EMAIL_USER_NAME,
    EMAIL_PASSWORD,
    EMAIL_ID,
    EMAIL_SUBJECT
} = process.env


export const SERVER_CONFIG = {
    APP_NAME,
    APP_VERSION,
    PORT,
    EMAIL_USER_NAME,
    EMAIL_PASSWORD,
    EMAIL_ID,
    EMAIL_SUBJECT
}

Object.keys(SERVER_CONFIG).forEach(key => {
    if (!SERVER_CONFIG[key]) {
        console.log(`[Missing] server config key : ${key}`)
        process.exit(1)
    }

})