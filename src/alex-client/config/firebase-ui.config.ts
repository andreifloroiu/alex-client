import { EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth"

export const firebaseUiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    tosUrl: '/terms-of-service',
    privacyPolicyUrl: '/privacy-policy',
    signInOptions: [
        { 
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        },
        {
            provider: GoogleAuthProvider.PROVIDER_ID,
            scopes: [],
            customParameters: {}
        },
        {
            provider: FacebookAuthProvider.PROVIDER_ID,
            scopes: ['email'],
            customParameters: {}
        }  
    ]
}