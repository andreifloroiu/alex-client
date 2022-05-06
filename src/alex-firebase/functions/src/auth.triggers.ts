import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { COLLECTIONS } from "./lib/types/constants";
import { UserDocument } from "./lib/types/user.model";


const db = admin.app().firestore()

export const blockUserSignup = functions.auth.user().onCreate(async (user) => {
    const hasUsers = !(await db.collection(COLLECTIONS.USERS).limit(1).get()).empty
    if (hasUsers) {
        const exists = await db.collection(COLLECTIONS.USERS).where('email', '==',  user.email).limit(1).get();
        if (!exists.empty) {
            await admin.auth().deleteUser(user.uid)
        } else {
            const userData = exists.docs[0].data()
            if (!(userData?.emailVerified ?? false)) {
                const link = await admin.auth().generateEmailVerificationLink(user.email ?? '', )
                // TODO send email verification link using somekind of service
            }
        }
    } else {
        if (!user.email) {
            await admin.auth().deleteUser(user.uid)
            return
        }
        functions.logger.warn(`Auto-creating user: ${JSON.stringify(user, null, 2)}`)
        const userDoc = <UserDocument>(<unknown>{
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            creationTime: user.metadata.creationTime
        });
        await db.collection(COLLECTIONS.USERS).add(userDoc)
        if (!(user.emailVerified ?? false)) {
            const link = await admin.auth().generateEmailVerificationLink(user.email ?? '', )
            // TODO send email verification link using somekind of service
        }
    }
  });