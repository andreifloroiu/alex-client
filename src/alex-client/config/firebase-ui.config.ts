import { EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth"

export const firebaseUiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    tosUrl: '/terms-of-service',
    privacyPolicyUrl: '/privacy-policy',
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,      
    ]
}