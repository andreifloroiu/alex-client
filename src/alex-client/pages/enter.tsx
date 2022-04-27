import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import AlexFooter from '../components/AlexFooter'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import styles from '../styles/Main.module.css'



const Enter: NextPage = () => {
  const { user } = useContext(UserContext)
  const isSignedIn = !!user
  return (
    <div className={styles.container}>
      <Head>
        <title>Login - ALEX</title>
        <meta name="description" content="Enter ALEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isSignedIn ?  <SignOutLayout /> : <SignInLayout />}
      <AlexFooter />
    </div>
  )
}
export default Enter
// Sign out button
function SignOutLayout() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Exit ALEX!
      </h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </main>
  )
}

function SignInLayout() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Enter ALEX!
      </h1>
    </main>
  )
}