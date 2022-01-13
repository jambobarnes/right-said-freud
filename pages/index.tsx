import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Right Said Fred Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Nav />
      </nav>

      <main>
        <Body />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
