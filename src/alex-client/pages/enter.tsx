import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthElement from '../components/elements/AuthElement';
import AlexFooter from '../components/layouts/AlexFooterLayout'
import { firebaseUiConfig } from '../config/firebase-ui.config';
import { auth } from '../lib/firebase'
import styles from '../styles/Main.module.css'


const Enter: NextPage = () => {
  const [ user ] = useAuthState(auth);
  const isSignedIn = !!user
  return (
    <div className={styles.container}>
      <Head>
        {isSignedIn ? (<title>Logout - ALEX</title>) : (<title>Login - ALEX</title>)}
        <meta name="description" content="Enter ALEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isSignedIn ?  <SignOutLayout /> : <SignInLayout />}
      <AlexFooter />
    </div>
  )
}

export default Enter

// Sign out layout
function SignOutLayout() {
  const signoutOnClick = () => {
    auth.signOut()
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Exit ALEX!
      </h1>
      <Link href={'/'}>Home</Link>
      <button onClick={ signoutOnClick }>Sign Out</button>
    </main>
  )
}

// Sign in layout
function SignInLayout() {
  const uiConfig = {
    ...firebaseUiConfig,
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Enter ALEX!
      </h1>
      <AuthElement uiConfig={uiConfig} firebaseAuth={auth} />
    </main>
  )
}