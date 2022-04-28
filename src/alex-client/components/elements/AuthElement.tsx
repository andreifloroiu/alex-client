import React, { useEffect } from 'react'
import firebaseui from 'firebaseui'

export default function AuthElement(props:any) {
    // Global ID for the element.
    const ELEMENT_ID = 'firebaseui_container';
    // Destructure props
    const {firebaseAuth, uiConfig, uiCallback} = props;    
    useEffect(() => {        
        const uiWidget = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebaseAuth);
        if (uiConfig.signInFlow == 'popup') {
            uiWidget.reset();
        }
        // Store user signed in state.
        let userSignedIn = false;
        // Track auth state of firebase auth.
        firebaseAuth.onAuthStateChanged((user: any) => {
            if (!user && userSignedIn) {
                uiWidget.reset();
            }
            userSignedIn = !!user;
        });
        // Trigger callback if set
        if (uiCallback) {
            uiCallback(uiWidget)
        }
        // Start widget
        uiWidget.start(`#${ELEMENT_ID}`, uiConfig)
        // Returned function will be called on component unmount 
        return () => {
          uiWidget.delete();
        }
      }, [firebaseAuth, uiCallback, uiConfig])
    return (
        <div id={ELEMENT_ID} />
    )
}