'use client'
import Header from '../components/header';
import Footer from '@/components/footer';
import Why from '@/section/why';
import How from '@/section/how';
import About from '@/section/about';
import Price from '@/section/price';

export default function Home() {

  const callAPI = async () => {
    try {
      const res = await fetch(`https://api.sendgrid.com/v3/mail/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.send_grid_api_key}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}')
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="font-sans flex flex-col h-screen">
      <button onClick={callAPI}>asdasdasd</button>
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
