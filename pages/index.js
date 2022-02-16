import Head from 'next/head'

// Components
import Layout from '../components/Layout';
import Hero from '../components/hero0';


export default function Home({}) {
  return (
    <>
    <Head>
      <title>El Pasquino</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      
      <Hero/>

    </Layout>
    </>
  )
}


