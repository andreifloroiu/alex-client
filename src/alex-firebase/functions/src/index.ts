import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const checkAppConfigured = functions.https.onRequest(async (request, response) => {
  const doc = await admin.app().firestore().doc("/CSOProfile/default").get();
  const data = doc.data();
  const isProfileComplete = data?.isProfileComplete ?? false;
  const hasFinancialData = data?.hasFinancialData ?? false;
  const hasBankAccount = data?.hasBankAccount ?? false;
  response.json({isProfileComplete, hasFinancialData, hasBankAccount});
});
