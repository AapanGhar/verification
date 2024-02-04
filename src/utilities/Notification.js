
import axios from "axios";
import { __logger } from '../utilities/logger.js'
const { TELEGRAM_TOKEN, CHAT_ID } = process.env


const apiUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;




export const notification = async (message) => {
    console.log("🚀 ~ notification ~ message:", message)
    try {
        __logger.info({ notification: 'sending notification', message })
        let result = axios.post(apiUrl, {
            chat_id: CHAT_ID,
            text: message
        })
        console.log(result)
    } catch (error) {
        console.log("🚀 ~ notification ~ er̥ror:", error)
        __logger.error({ notification: 'notification.js catch block error' })
    }

}
