import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPolicy() {
  return (
    <main className="font-sans flex flex-col h-screen">
      <Header/>
      <article className="xl:mx-64 xl:my-10 mx-4 my-6 flex-1">
        <span className="font-bold text-3xl">Polityka prywatności</span>
        <div className="mx-4">
          <div className="my-4">
            <span className="font-bold text-xl">Informacje ogólne</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <a className="font-semibold" href="https://swiadectwa-eko.pl" target="_blank">swiadectwa-eko.pl</a></li>
              <li>Operatorem serwisu oraz Administratorem danych osobowych jest: <span className="font-semibold">Swiadectwa Eko</span></li>
              <li>Adres kontaktowy poczty elektronicznej operatora:  <a className="font-semibold" href="mailto:swiadectwa.eko.kontakt@gmail.com" target="_blank">swiadectwa.eko.kontakt@gmail.com</a></li>
              <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
                Serwisie.
              </li>
              <li>Serwis wykorzystuje dane osobowe w następujących celach:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li> Obsługa zapytań przez formularz</li>
                  <li>Realizacja zamówionych dokumentów</li>
                </ul>
              </li>
              <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący
                sposób:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów
                    Operatora.
                  </li>
                  <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Wybrane metody ochrony danych stosowane przez Operatora</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
                Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
                użytkownika i mogą być odczytane jedynie na docelowym serwerze.
              </li>
              <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
              <li>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania,
                wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne
                aktualizacje komponentów programistycznych.
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Hosting</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: <a className="font-semibold" href="https://github.com" target="_blank">Github.com</a></li>
            </ol>
          </div>
          <div className="py-4">
            <span
              className="font-bold text-xl">Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli
                będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
                Administratorze. Dotyczy to takich grup odbiorców:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li>upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu
                    działania strony
                  </li>
                </ul>
              </li>
              <li>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
                związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
                odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
              </li>
              <li>Przysługuje Ci prawo żądania od Administratora:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li>ich sprostowania,</li>
                  <li>usunięcia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec
                przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez
                Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
                istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów,
                praw
                i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.
              </li>
              <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki
                2,
                00-193 Warszawa.
              </li>
              <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
              <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu
                decyzji,
                w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
                Administratora marketingu bezpośredniego.
              </li>
              <li>Dane osobowe są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
                Oznacza to, że przesyłamy je poza teren Unii Europejskiej.
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Informacje w formularzach</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one
                podane.
              </li>
              <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
              <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z
                adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia
                się
                wewnątrz adresu url strony zawierającej formularz.
              </li>
              <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w
                celu
                dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp.
                Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Logi Administratora</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w
                celu
                administrowania serwisem.
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Istotne techniki marketingowe</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z
                siedzibą
                w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane
                informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie
                informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może
                przeglądać
                i edytować informacje wynikające z plików cookies przy pomocy narzędzia:
                <a className="font-semibold" href="https://www.google.com/ads/preferences/" target="_blank"> https://www.google.com/ads/preferences/</a>
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span className="font-bold text-xl">Informacja o plikach cookies</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Serwis korzysta z plików cookies.</li>
              <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które
                przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
                internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
                przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              </li>
              <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do
                nich dostęp jest operator Serwisu.
              </li>
              <li>Pliki cookies wykorzystywane są w następujących celach:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li>utrzymanie sesji Serwisu;</li>
                  <li>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
                </ul>
              </li>
              <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz
                „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
                urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia
                oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym
                Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
                Użytkownika.
              </li>
              <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie
                dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą
                dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies.
                Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera
                pomoc lub dokumentacja przeglądarki internetowej.
              </li>
              <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
                internetowych Serwisu.
              </li>
              <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również
                przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc.
                z
                siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
              </li>
            </ol>
          </div>
          <div className="py-4">
            <span
              className="font-bold text-xl">Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</span>
            <ol className="list-decimal list-inside text-lg mx-4 my-2">
              <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki.
                Zastrzegamy,
                że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
                utrzymania
                preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron
                www.
              </li>
              <li>
                W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i
                postępuj zgodnie z instrukcjami:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li><a className="font-semibold" href="https://support.microsoft.com/pl-pl/microsoft-edge/wyświetlanie-i-usuwanie-historii-przeglądarki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4" target="_blank">Edge</a></li>
                  <li><a className="font-semibold" href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank">Chrome</a></li>
                  <li><a className="font-semibold" href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank">Safari</a></li>
                  <li><a className="font-semibold" href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=Włączanie+i+wyłączanie+obsługi+ciasteczek&redirectlocale=pl" target="_blank">Firefox</a></li>
                  <li><a className="font-semibold" href="https://help.opera.com/pl/latest/web-preferences/#cookies" target="_blank">Oper</a></li>
                </ul>
                Urządzenia mobilne:
                <ul className="list-disc list-inside mx-4 my-2">
                  <li><a className="font-semibold" href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank">Android</a></li>
                  <li><a className="font-semibold" href="https://support.apple.com/pl-pl/HT201265" target="_blank">Safari (iOS)</a></li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </article>
      <Footer/>
    </main>
  )
}
