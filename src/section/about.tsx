import TextContent from '@/components/text-content';

export const About = () => {
  return (
    <div className="text-lg font-medium break-normal">
      <div className="font-bold text-3xl my-2">O mnie</div>
      <TextContent additionalClass="text-xl" htmlText={["Cześć!"]}/>
      <TextContent htmlText={["Jestem",
        <span key="about-monika" className="text-lg font-semibold"> Monika</span>,
        ", absolwentka studiów o kierunku budownictwo na renomowanej",
        <span key="about-pp" className="text-lg font-semibold"> Politechnice Poznańskiej</span>,
        ". Moja pasja do projektowania i konstruowania budynków jest nieodłączną częścią mojego życia. Obecnie pracuję jako asystentka projektanta konstruktora, dążąc do zdobycia niezbędnego doświadczenia, które pozwoli mi uzyskać uprawnienia konstrukcyjne."]}/>
      <TextContent htmlText={["Dodatko wykonuję",
        <span key="about-SChE" className="text-lg font-semibold"> Świadectwa Charakterystyki Energetyczej</span>,
        ", co łączy moją dzisiejszą pracę z doświadczeniem w projektowaniu instalacji fotowoltaicznych. Widzę w nich potencjał do zmiany naszego sposobu korzystania z energii, tworząc bardziej zrównoważone i ekologiczne środowisko."]}/>
      <TextContent htmlText={["Nie tylko w pracy, ale i w życiu prywatnym, staram się wykazywać ekologiczne podejście. Uważam, że naszym wspólnym celem powinno być podnoszenie poziomu energetycznego w budynkach, które nie tylko spełniają swoje funkcje, ale także są efektywne energetycznie i przyjazne dla środowiska."]}/>
      <TextContent htmlText={["W mojej pracy zawodowej i osobistym życiu staram się łączyć pasję do budownictwa z zobowiązaniem do ochrony naszej planety. Jestem przekonana, że innowacje w dziedzinie budownictwa mogą mieć pozytywny wpływ na nasze środowisko."]}/>
    </div>
  );
}

export default About;
