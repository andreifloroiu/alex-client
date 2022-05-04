import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { DEFAULT_REGION, isUserAuthenticated } from "./lib/utils";

export const checkAppConfiguredExport = 
  functions.region(DEFAULT_REGION).https.onRequest(async (request, response) => {
    if (request.method != 'GET') {
      response.status(405).send('Method not allowed!')
      return;
    }
    if (await isUserAuthenticated(request)) {
      // This has a descraping role.
      functions.logger.warn(`Request from unauthenticated user from: ${request.ip}`)
    }
    const doc = await admin.app().firestore().doc("/CSOProfile/default").get();
    const data = doc.data();
    const isProfileComplete = data?.isProfileComplete ?? false;
    const hasFinancialData = data?.hasFinancialData ?? false;
    const hasBankAccount = data?.hasBankAccount ?? false;
    response.json({isProfileComplete, hasFinancialData, hasBankAccount});
  });