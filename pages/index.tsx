import Head from 'next/head'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beta Gamma Epsilon</title>
        <meta name='description' content='Beta Gamma Epsilon' />
        <link rel='icon' href='/icon.webp' />
      </Head>
      <Homepage />
    </div>
  )
}
