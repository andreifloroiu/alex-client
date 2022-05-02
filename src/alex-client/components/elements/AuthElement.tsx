import React, { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import firebaseui from 'firebaseui'
import { firebaseUiConfig } from '../../config/firebase-ui.config';
import 'firebaseui/dist/firebaseui.css'

export default function AuthElement(props:any) {
    // Global ID for the element.
    const ELEMENT_ID = 'firebaseui_container';
    // Destructure props
    const {uiConfig} = props;    
    useEffect(() => {
        const compatApp = !firebase.apps.length ? 
          firebase.initializeApp(firebaseUiConfig, 'compat-alex')
          : firebase.app('compat-alex');
        let uiWidget:(firebaseui.auth.AuthUI | null) = null ;
        try {
          uiWidget = new firebaseui.auth.AuthUI(compatApp.auth);
          if (uiConfig.signInFlow == 'popup') {
              uiWidget.reset();
          }
          // Start widget
          uiWidget.start(`#${ELEMENT_ID}`, uiConfig)
        } 
        catch (e) {
          console.error(e);
          return (null);
        }   
        // Returned function will be called on component unmount 
        return () => {
          uiWidget?.delete();
        }
      }, [uiConfig])
    return (
        <div id={ELEMENT_ID} />
    )
}