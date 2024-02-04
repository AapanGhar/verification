import { v4 as uuidv4 } from 'uuid'


const uuidGenerator = () => {
    return uuidv4()
}

function generateOTP () {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

export const COMMON_HELPER = { uuidGenerator, generateOTP }