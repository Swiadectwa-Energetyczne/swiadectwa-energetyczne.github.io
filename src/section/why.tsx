import ImageWithText from '@/components/image-with-text';

export const Why = () => {
  return (
    <>
      <div className="font-bold text-3xl my-2">Dlaczego potrzebujesz Świadectwo Charakterystyki Energetycznej?</div>
      <ImageWithText image="coins-green.svg" alt="Sprzedaż"
                     animation={true}
                     text="Obowiązkowe w przypadku sprzedaży lub wynajmu nieruchomości."/>
      <ImageWithText image="home-green.svg" alt="Budowa"
                     animation={true}
                     text="Niezbędne w przypadku budowy nowego budynku - przy odbiorze budowlanym."/>
      <ImageWithText image="hammer-crash-green.svg" alt="Termomodernizacja"
                     animation={true}
                     text="Wymagane w przypadku termomodernizacji istniejącego budynku lub niektórych działaniach remontowych."/>
      <ImageWithText image="chart-line-up-green.svg" alt="Ocena efektywności"
                     animation={true}
                     text="Przydatne w ocenie efektywności energetycznej budynku."/>
      <ImageWithText image="search-alt-green.svg" alt="Ustawa"
                     animation={true} htmlText={["Po więcej informacji odsyłam do ustawy: ",
        <a key="ustawa" className='font-medium text-lg'
           href='https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000831/T/D20160831L.pdf'
           target='_blank'>&nbsp;Dz.U. 2016 poz. 831</a>]}/>
    </>
  );
}

export default Why;