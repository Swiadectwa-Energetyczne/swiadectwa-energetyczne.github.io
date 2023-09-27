import Header from '../components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <main className="font-sans flex flex-col h-screen">
        <Header/>
        <article className="xl:mx-64 xl:my-10 mx-4 my-6 flex-1">
          <section id="about-me">O mnie</section>
        </article>
        <Footer/>
      </main>
    </>
  )
}
