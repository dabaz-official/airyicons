import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import IconsList from '../components/IconsList'
import Masthead from '../components/Masthead'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airyicons</title>
        <link rel="icon" href="/logos/logo-blue-600.svg" />
      </Head>

      <div className="relative overflow-hidden bg-slate-50 py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Header />

          <Masthead />

          <IconsList />

          <Footer />
        </div>
      </div>
    </div>
  )
}
