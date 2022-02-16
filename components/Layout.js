import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>El Pasquino</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <NavBar/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;