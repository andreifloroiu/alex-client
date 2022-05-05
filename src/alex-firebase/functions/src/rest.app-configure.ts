import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { DEFAULT_REGION, isUserAuthenticated } from "./lib/utils";

const db = admin.app().firestore();

export const checkAppConfigured = 
  functions.region(DEFAULT_REGION).https.onRequest(async (request, response) => {
    if (request.method != 'GET') {
      response.status(405).send('Method not allowed!')
      return
    }
    if (await isUserAuthenticated(request)) {
      // This has a descraping role.
      functions.logger.warn(`Request from unauthenticated user from: ${request.ip}`)
    }
    const doc = await db.collection('cso-profile').doc("default").get();
    const data = doc.data();
    // Fill the result data.
    const hasLegalInfo = data?.configurationState?.hasLegalInfo ?? false;
    const hasLegalRepresentative = data?.configurationState?.hasLegalRepresentative ?? false;
    const hasFinancialData = data?.configurationState?.hasFinancialData ?? false;
    const hasBankAccounts = data?.configurationState?.hasBankAccounts ?? false;
    const isComplete = data?.configurationState?.isComplete ?? false;
    response.json({hasLegalInfo, hasLegalRepresentative, hasFinancialData, hasBankAccounts, isComplete});
  });

export const checkHasUsers =
  functions.region(DEFAULT_REGION).https.onRequest(async (request, response) => {
  if (request.method != 'GET') {
    response.status(405).send('Method not allowed!')
    return
  }
  const exists = !!await db.collection('users').limit(1).get()
  response.json({exists});
});