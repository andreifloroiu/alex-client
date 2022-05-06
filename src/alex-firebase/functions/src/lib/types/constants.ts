import { Level, ValidationResult } from "./validation-result.model"

export namespace HTTP {
    export const GET = 'GET'
    export const POST = 'POST'
    export const PUT = 'PUT'
    export const DELETE = 'DELETE'
    export const OK = 200
    export const CREATED = 201
    export const BAD_REQUEST = 400
    export const UNAUTHORIZED = 401
    export const METHOD_NOT_ALLOWED = 405
}

export namespace VALIDATIONS {
    export const BAD_REQUEST_EMPTY_CONTENT = <ValidationResult> (<unknown> {
        level: Level.error,
        message: 'empty-content-bad-request',
        code: HTTP.BAD_REQUEST
    })
    export const UNAUTHORIZED = <ValidationResult> (<unknown> {
        level: Level.error,
        message: 'unauthorized',
        code: HTTP.UNAUTHORIZED
    })
}

export namespace COLLECTIONS {
    export const USERS = 'users'
    export const CSO_PROFILE = 'cso-profile'
    export const DEFAULT_CSO_PROFILE_ID = 'default'
}

export namespace GCP {
    export const DEFAULT_REGION = 'europe-west1'
}