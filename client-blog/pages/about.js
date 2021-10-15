import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

const About = () => {
    return (
        <div className="flex-layout">
            <Head>
                <title>Blog | About</title>
                <link rel="icon" href="/code.png" />
            </Head>
            <Header />
            <Main>
                <div className="container">
                    <h1>hello world</h1>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

export default About