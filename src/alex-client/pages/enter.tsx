import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import AlexFooter from '../components/layouts/AlexFooterLayout'
import { auth } from '../lib/firebase'
import { useIsSignedIn } from '../lib/hooks';
import { ROUTE_HOME } from '../lib/routes.constants';
import styles from '../styles/Main.module.css'


const Enter: NextPage = () => {
  const { isSignedIn, user } = useIsSignedIn();
  const router = useRouter();
  if (isSignedIn) {
    router.push(ROUTE_HOME)
    return (null)
  }
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
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Enter ALEX!
      </h1>
    </main>
  )
}

// Sign up layout
function SignUpLayout() {

}