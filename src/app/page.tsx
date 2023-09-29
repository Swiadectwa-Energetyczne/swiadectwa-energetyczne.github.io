'use client';
import Header from '../components/header';
import Footer from '@/components/footer';
import Why from '@/section/why';
import How from '@/section/how';
import About from '@/section/about';
import Price from '@/section/price';
import {sendEmail} from '@/lib/send-grid';

export default function Home() {
  const callAPI = async () => {
    try {
      await sendEmail()
    } catch (err) {
    }
  };

  return (
    <main className="font-sans flex flex-col h-screen">
      <div>
        <main>
          <button onClick={callAPI}>Make API call</button>
        </main>
      </div>
      <Header/>
      <article className="xl:mx-64 xl:my-10 mx-6 my-8 flex-1">
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
          <span>Kontakt</span>
          <ul className={"list-disc list-inside"}>
            <li key="name">Imię</li>
            <li key="surname">Nazwisko</li>
            <li key="tel">Telefon kontaktowy</li>
            <li key="mail">Email</li>
            <li key="post">Kod-Pocztowy</li>
            <li key="sub">Temat</li>
            <li key="content">Treść wiadomości</li>
            <li key="agreement">Zgoda na przetwarzanie i polityka prywatności</li>
          </ul>
        </section>
        <section>
          Podziękowanie za kontakt:
          Dziękuję za wypełnienie formularza kontaktowego. Zrobię wszystko, co w jej mocy, aby odpowiedzieć na Państwa
          zapytanie jak najszybciej.
          Dzięki za zaufanie, które mi okazujecie. Jeśli mają Państwo jakiekolwiek dodatkowe pytania lub potrzebujecie
          dalszych informacji, proszę o kontakt mailowy.
        </section>
      </article>
      <Footer/>
    </main>
  )
}
