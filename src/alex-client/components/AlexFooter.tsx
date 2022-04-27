import Image from 'next/image'
import styles from '../styles/Main.module.css'

const AlexFooter = () => {
    return (
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
    )
}

export default AlexFooter