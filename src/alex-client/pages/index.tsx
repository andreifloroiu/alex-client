import type { NextPage } from 'next'
import Head from 'next/head'
import AlexFooter from '../components/layouts/AlexFooterLayout'
import { useAppConfigured } from '../lib/hooks'
import styles from '../styles/Main.module.css'

const Home: NextPage = () => {
  useAppConfigured()
  return (    
    <div className={styles.container}>
      <Head>
        <title>ALEX</title>
        <meta name="description" content="ALEX - RO NGO APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ALEX!
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

export default Home
