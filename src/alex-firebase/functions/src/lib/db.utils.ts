import * as admin from "firebase-admin";
import { HTTP } from "./types/constants";
import { CSOProfileDocument } from "./types/cso-profile.model";
import { Level, ValidationResult } from "./types/validation-result.model";
import { COLLECTIONS } from "./types/constants";


const db = admin.app().firestore()

export const updateCSOProfileDB = async function(data:CSOProfileDocument):Promise<ValidationResult> {
    const res = <ValidationResult> (<unknown> {
        level: Level.info,
        message: 'cso-profile-created',
        code: HTTP.CREATED
    })
    // TODO Validate
    if (await (await db.collection(COLLECTIONS.CSO_PROFILE).doc(COLLECTIONS.DEFAULT_CSO_PROFILE_ID).get()).exists) {
        await db.collection(COLLECTIONS.CSO_PROFILE).doc(COLLECTIONS.DEFAULT_CSO_PROFILE_ID).delete()
    }
    await db.collection(COLLECTIONS.CSO_PROFILE).doc(COLLECTIONS.DEFAULT_CSO_PROFILE_ID).create(data)
    return res
}