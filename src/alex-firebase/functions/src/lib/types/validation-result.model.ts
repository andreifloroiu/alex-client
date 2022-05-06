export interface ValidationResult {
    level: Level.error
    message: string
    code?: number
    fields?: Array<FieldValidationResult>
}
export interface FieldValidationResult {
    level: Level.error
    field: string
    message: string 
}
export enum Level {
    info,
    warn,
    error
}