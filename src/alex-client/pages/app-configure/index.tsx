import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import AlexFooter from '../../components/layouts/AlexFooterLayout'
import { useIsSignedIn } from '../../lib/hooks'
import { ROUTE_APP_CONFIGURE } from '../../lib/routes.constants'
import styles from '../../styles/Main.module.css'

const InitSignupFlow: NextPage = () => {
  const { isSignedIn, user } = useIsSignedIn();
  const router = useRouter()
  if (isSignedIn) {
    router.push(ROUTE_APP_CONFIGURE)
    return (null)
  }
  return (    
    <div className={styles.container}>
      <Head>
        <title>ALEX</title>
        <meta name="description" content="Signup with ALEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Step 1 in configuring Alex
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

      </main>

      <AlexFooter />
    </div>
  )
}

export default InitSignupFlow
