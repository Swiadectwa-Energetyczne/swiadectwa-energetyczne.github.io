import Header from '../components/header';
import Footer from '@/components/footer';
import Why from '@/section/why';
import How from '@/section/how';
import About from '@/section/about';

export default function Home() {
  return (
    <main className="font-sans flex flex-col h-screen">
      <Header/>
      <article className="xl:mx-64 xl:my-10 mx-6 my-8 flex-1">
        <section id="about">
          <About/>
        </section>
        <section id="price">Cennik
          - Mieszkanie (od 290 zł Brutto) (Realizacja do 3 dni roboczych)
          - Budynek mieszkalny jednorodzinny (od 490 zł Brutto) (Realizacja do 3 dni roboczych)
          - Lokal użytkowy (od 490zł Brutoo) (Realizacja do 3dni roboczych)
          - Inny budynek (od 590zł Brutto Cena zależna od metrażu) (Realizacja do 5 dni roboczych)
          - Inwentaryzacja - w przypadku dokumentacji technicznej budynku/mieszkania (Cena ustalana indywidualnie)
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
