import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BUT INFORMATIQUE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome !" />
        <p className="description">
         IP Minecraft <code>mc.info1d.gq</code>
        </p>
      </main>
    </div>
  )
}
