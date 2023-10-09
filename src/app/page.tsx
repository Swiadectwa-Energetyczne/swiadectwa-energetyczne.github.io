import Header from '../components/header';
import Footer from '@/components/footer';
import Why from '@/section/why';
import How from '@/section/how';
import Price from '@/section/price';
import Contact from '@/section/contact';
import Hi from '@/section/hi';

export default function Home() {
  return (
    <main className="font-sans flex flex-col h-screen">
      <Header/>
      <article className="xl:my-10 my-8 flex-1">
        <section className="xl:mx-48 xl:my-12 my-2">
         <Hi/>
        </section>
        <section className="xl:mx-48 mx-6 xl:my-24 my-2" id="price">
          <Price/>
        </section>
        <section className="xl:mx-48 mx-6 xl:my-24 my-2" id="how">
          <How/>
        </section>
        <section className="xl:mx-48 mx-6 xl:my-24 my-2" id="why">
          <Why/>
        </section>
        <section className="xl:mx-48 mx-6 xl:my-24 my-2" id="contact">
          <Contact/>
        </section>
      </article>
      <Footer/>
    </main>
  )
}
