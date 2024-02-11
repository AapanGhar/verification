const sendOtp = (otp) => {
    return `<html><body>OTP: ${otp}</body></html>`
}

export const TEMPLATE_HELPER = { sendOtp }