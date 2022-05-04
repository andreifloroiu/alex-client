import { initializeApp } from "firebase-admin/app";
import * as appConfigure from "./rest.app-configure";

initializeApp()

export const checkAppConfigured = appConfigure.checkAppConfigured
export const checkHasUsers = appConfigure.checkHasUsers
