import { Request } from "firebase-functions"
import { auth } from "firebase-admin";

export const isRequestAuthenticated = async (request:Request) => {
    const BEARER_SPLIT = 'Bearer '
    const token = request?.headers?.authorization?.split(BEARER_SPLIT)[1]
    if (!token) {
        return false
    }
    try {
        const decoded = await auth().verifyIdToken(token)
        const now = new Date().getUTCSeconds()
        return decoded.exp > now
    }
    catch (error) {
        return false
    }
}