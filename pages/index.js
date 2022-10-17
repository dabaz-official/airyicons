import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airyicons</title>
        <link rel="icon" href="/logos/logo-violet-600.svg" />
      </Head>

      <div className="relative overflow-hidden bg-slate-50 pt-6">
        <Header />
      </div>
    </div>
  )
}
