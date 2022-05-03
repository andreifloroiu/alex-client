import { Request } from "firebase-functions"
import { auth } from "firebase-admin";

const BEARER_SPLIT = 'Bearer '

export const isUserAuthenticated = async (request:Request) => {
    const token = request?.headers?.authorization?.split(BEARER_SPLIT)[1]
    if (!token) {
        return false
    }
    try {
        const decoded = await auth().verifyIdToken(token)
        return !!decoded;
    }
    catch (error) {
        return false;
    }
}