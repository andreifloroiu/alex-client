export interface CSOProfileDocument {
    id: string
    fiscalId: string
    name: string
    registerName: string
    legalRepresentative: CSOLegalRepresentative
    configurationState: CSOCompletionPhase
}
export interface CSOLegalRepresentative {
    firstname: string
    surname: string
    email: string
    phone: string
    address: string
}
export interface CSOCompletionPhase {
    hasLegalInfo: false
    hasLegalRepresentative: false
    hasFinancialData: false
    hasBankAccounts: false
    isComplete: false
}