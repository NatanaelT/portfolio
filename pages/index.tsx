import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from '../components/Home'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natanael - Portfólio</title>
        <meta name="description" content="Portfólio Natanael - WEB DEVELOPMENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home
