import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getIsCSOProfileCreated } from './firebase';
import { ROUTE_APP_CONFIGURE, ROUTE_ENTER } from './routes.constants';

// Custom hook to read  auth record and user profile doc
export function useIsSignedIn() {
  const [user] = useAuthState(auth)
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false);
    }
    return () => {};
  }, [user]);

  return { isSignedIn, user };
}

export function useAppConfigured() {
  const router = useRouter()
  useEffect(() => {
    getIsCSOProfileCreated()
      .then((isCreated) => { 
        if (!isCreated) { 
          router.push(ROUTE_APP_CONFIGURE)
        }})
      .catch((e) => {
        console.error(JSON.stringify(e, null, 2))
        if (e.code == 'permission-denied') {
          router.push(ROUTE_ENTER)
        }
      })
    return () => { };
  }, [router])
  
}