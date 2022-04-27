import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SetupProfileRedirect from '../components/SetupProfileRedirect'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (    
    <div className={styles.container}>
      <SetupProfileRedirect />
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

      <footer className={styles.footer}>
        <a
          href="https://code4.ro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="Code4Romania Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
