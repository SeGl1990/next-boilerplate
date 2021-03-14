import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with Pre-Commits</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className={styles.description}>
          With pre-commits <br /> Just run
          <br />
          <code className={styles.code}>git add .</code>
          <br />
          <code className={styles.code}>git commit -m "your first pre-commit"</code>
        </p>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href='https://severinglaser.ch' target='_blank' rel='noopener noreferrer'>
          Powered by <img src='https://severinglaser.ch/favicon.ico' alt='SeGl Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
