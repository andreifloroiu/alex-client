import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { isRequestAuthenticated } from "./lib/utils";
import { CSOProfileDocument } from "./lib/types/cso-profile.model";
import { updateCSOProfileDB } from "./lib/db.utils";
import { Level } from "./lib/types/validation-result.model";
import { GCP, HTTP, VALIDATIONS } from "./lib/types/constants";

const db = admin.app().firestore()

export const checkAppConfigured =
  functions.region(GCP.DEFAULT_REGION).https.onRequest(async (request, response) => {
    if (request.method != HTTP.GET) {
      response.status(HTTP.METHOD_NOT_ALLOWED).send('Method not allowed!')
      return
    }
    if (await isRequestAuthenticated(request)) {
      // This has a descraping role.
      functions.logger.info(`Request from unauthenticated user from: ${request.ip}`)
    }
    const doc = await db.collection('cso-profile').doc("default").get();
    const data = doc.data();
    // Fill the result data.
    const hasLegalInfo = data?.configurationState?.hasLegalInfo ?? false;
    const hasLegalRepresentative = data?.configurationState?.hasLegalRepresentative ?? false;
    const hasFinancialData = data?.configurationState?.hasFinancialData ?? false;
    const hasBankAccounts = data?.configurationState?.hasBankAccounts ?? false;
    const isComplete = data?.configurationState?.isComplete ?? false;
    response.json({ hasLegalInfo, hasLegalRepresentative, hasFinancialData, hasBankAccounts, isComplete });
  });

export const checkHasUsers =
  functions.region(GCP.DEFAULT_REGION).https.onRequest(async (request, response) => {
    if (request.method != HTTP.GET) {
      response.status(HTTP.METHOD_NOT_ALLOWED).send('Method not allowed!')
      return
    }
    const exists = !!await db.collection('users').limit(1).get()
    response.json({ exists });
  });

export const updateCSOProfile =
  functions.region(GCP.DEFAULT_REGION).https.onRequest(async (request, response) => {
    if (request.method != HTTP.POST) {
      response.status(HTTP.METHOD_NOT_ALLOWED).send('method-not-allowed')
      return
    }
    if (!isRequestAuthenticated(request)) {
      response.status(HTTP.UNAUTHORIZED).send(VALIDATIONS.UNAUTHORIZED)
      return
    }
    if (request.body == null) {
      const res = VALIDATIONS.BAD_REQUEST_EMPTY_CONTENT
      response.status(res.code ?? HTTP.BAD_REQUEST).json(res)
      return
    }
    const profile = <CSOProfileDocument>(<unknown>request.body)
    const result = await updateCSOProfileDB(profile);
    let code = result.code;
    if (result.level == Level.error) {
      response.status(code ?? HTTP.BAD_REQUEST).json(result);
      return;
    }
    response.status(code ?? HTTP.CREATED).json(result);
  })