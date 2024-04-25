import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Topsters2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
        <Header title="Beware of satanic music" />
      <p>A lot of music has satanic lyrics that will put you in a demonic state. This is not to be laughed at. It endangers your soul and mind.</p>
      <p>For example, look at the lyrics of The Beatles 'Strawberry Fields Forever': "Nothing is real, it doesn't matter much to me, living is easy with eyes closed, take me down to that endless red place la la la." This is nihilism: it says, "hell isn't so bad, come try it out!" It's pure evil.</p>
      <p>If you've been listening to this music, cure yourself by listening to Gregorian and Orthodox chants instead:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/i-3h9TQ312c?si=uP8QjsUtsSotiSs6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>By the way I'm shutting down topsters.</p>
      </main>

      <Footer />
    </div>
  )
}
