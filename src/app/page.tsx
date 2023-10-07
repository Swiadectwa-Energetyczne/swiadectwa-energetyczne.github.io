import Header from '../components/header';
import Footer from '@/components/footer';
import Why from '@/section/why';
import How from '@/section/how';
import About from '@/section/about';
import Price from '@/section/price';
import Contact from '@/section/contact';

export default function Home() {
  return (
    <main className="font-sans flex flex-col h-screen">
      <Header/>
      <article className="xl:mx-48 xl:my-10 mx-6 my-8 flex-1">
        <section id="about">
          <About/>
        </section>
        <section id="price">
          <Price/>
        </section>
        <section id="how">
          <How/>
        </section>
        <section id="why">
          <Why/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </article>
      <Footer/>
    </main>
  )
}
