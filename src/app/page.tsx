import Header from '../components/header';
import Footer from '@/components/footer';
import ImageWithText from '@/components/image-with-text';

export default function Home() {
  return (
    <main className="font-sans flex flex-col h-screen">
      <Header/>
      <article className="xl:mx-64 xl:my-10 mx-4 my-6 flex-1">
        <section id="about-me">Cześć! Jestem Monika, absolwentka studiów o kierunku budownictwo na renomowanej
          Politechnice Poznańskiej. Moja pasja do projektowania i konstruowania budynków jest nieodłączną częścią mojego
          życia. Obecnie pracuję jako asystentka projektanta konstruktora, dążąc do zdobycia niezbędnego doświadczenia,
          które pozwoli mi uzyskać uprawnienia konstrukcyjne.
          Dodatko wykonuję Świadectwa Charakterystyki Energetyczej, co łączy moją dzisiejszą pracę z doświadczeniem w
          projektowaniu instalacji fotowoltaicznych. Widzę w nich potencjał do zmiany naszego sposobu korzystania z
          energii, tworząc bardziej zrównoważone i ekologiczne środowisko.
          Nie tylko w pracy, ale i w życiu prywatnym, staram się wykazywać ekologiczne podejście. Uważam, że naszym
          wspólnym celem powinno być podnoszenie poziomu energetycznego w budynkach, które nie tylko spełniają swoje
          funkcje, ale także są efektywne energetycznie i przyjazne dla środowiska.
          W mojej pracy zawodowej i osobistym życiu staram się łączyć pasję do budownictwa z zobowiązaniem do ochrony
          naszej planety. Jestem przekonana, że innowacje w dziedzinie budownictwa mogą mieć pozytywny wpływ na nasze
          środowisko.
        </section>
        <section id="how">Jak to działa
          - Wypełnienie formularza kontaktowego
          - Kontakt w celu uzyskania informacji na temat budynku
          - Ustalenie ceny oraz opłacenie Świadectwa Charakterystyki Energetycznej
          - Przygotowanie Świadectwa Charakterystyki Energetycznej
        </section>
        <section id="cennik">Cennik
          - Mieszkanie (od 290 zł Brutto) (Realizacja do 3 dni roboczych)
          - Budynek mieszkalny jednorodzinny (od 490 zł Brutto) (Realizacja do 3 dni roboczych)
          - Lokal użytkowy (od 490zł Brutoo) (Realizacja do 3dni roboczych)
          - Inny budynek (od 590zł Brutto Cena zależna od metrażu) (Realizacja do 5 dni roboczych)
          - Inwentaryzacja - w przypadku dokumentacji technicznej budynku/mieszkania (Cena ustalana indywidualnie)
        </section>
        <section className="my-32" id="why">
          <span className="font-bold text-3xl">Dlaczego potrzebujesz Świadectwo Charakterystyki Energetycznej?</span>
          <ImageWithText image="coins-green.svg" alt="Sprzedaż" text="Obowiązkowe w przypadku sprzedaży lub wynajmu nieruchomości."/>
          <ImageWithText image="home-green.svg" alt="Budowa" text="Niezbędne w przypadku budowy nowego budynku - przy odbiorze budowlanym."/>
          <ImageWithText image="hammer-crash-green.svg" alt="Termomodernizacja" text="Wymagane w przypadku termomodernizacji istniejącego budynku lub niektórych działaniach remontowych."/>
          <ImageWithText image="chart-line-up-green.svg" alt="Ocena efektywności" text="Przydatne w ocenie efektywności energetycznej budynku."/>
          <ImageWithText image="search-alt-green.svg" alt="Ustawa" htmlText={["Po więcej informacji odsyłam do ustawy: ", <a className='font-medium text-lg' href='https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000831/T/D20160831L.pdf' target='_blank'>&nbsp;Dz.U. 2016 poz. 831</a>]}/>
        </section>
        <section id="contact">
          <span>Kontakt</span>
          <ul className={"list-disc list-inside"}>
            <li>Imię</li>
            <li>Nazwisko</li>
            <li>Telefon kontaktowy</li>
            <li>Email</li>
            <li>Kod-Pocztowy</li>
            <li>Temat</li>
            <li>Treść wiadomości</li>
            <li>Zgoda na przetwarzanie i polityka prywatności</li>
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
