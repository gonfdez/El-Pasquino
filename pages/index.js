import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JSONPretty from 'react-json-pretty';

import {getClient} from '../utils/sanity'

  export async function getStaticProps() {
    const data = await getClient(true).fetch(`*[]`);

  
    return {
      props: {
       data: {data}
      },
      revalidate: 50
      //HTML: <JSONPretty style={{maxWidth: "100ch", overflowX: "scroll", boxShadow: "0 0 5px rgba(0,0,0,.3"}} id="json-pretty" data={data}></JSONPretty>
    }
  }

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>El Pasquino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          El Pasquino
        </h1>
        <br />
        
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Next.js Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://sanity.io/docs" className={styles.card}>
            <h3>Sanity.io Documentation</h3>
            <p>Learn more about setting up Sanity Studio</p>
          </a>

        </div>

      </main>

    </div>
  )
}
