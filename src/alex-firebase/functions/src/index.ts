import { initializeApp } from "firebase-admin/app";
import { checkAppConfiguredExport } from "./rest.app-configure";

initializeApp()

export const checkAppConfigured = checkAppConfiguredExport
