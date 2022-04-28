import type { NextPage } from 'next'
import Head from 'next/head'
import AlexFooter from '../components/layouts/AlexFooterLayout'
import styles from '../styles/Main.module.css'

const InitProfile: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>ALEX</title>
          <meta name="description" content="Enter ALEX - RO NGO APP" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Start by creating a CSO profile!
          </h1>
  
        </main>
  
        <AlexFooter />
      </div>
    )
  }
  
  export default InitProfile