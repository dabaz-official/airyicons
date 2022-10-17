import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airyicons</title>
        <link rel="icon" href="/logos/logo-violet-600.svg" />
      </Head>

      <Header />
    </div>
  )
}
