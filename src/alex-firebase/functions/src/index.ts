import { initializeApp } from "firebase-admin/app";
import * as appConfigure from "./rest.app-configure";
import * as authTriggers from "./auth.triggers";

initializeApp()

// REST APIs (Express)
export const checkAppConfigured = appConfigure.checkAppConfigured
export const checkHasUsers = appConfigure.checkHasUsers
export const updateCSOProfile = appConfigure.updateCSOProfile
// TRIGGERS: AUTH
export const blockUserSignup = authTriggers.blockUserSignup
// TRIGGERS: DB
