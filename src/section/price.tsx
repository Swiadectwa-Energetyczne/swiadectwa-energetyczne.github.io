import CardLink from '@/components/card-link';

export const Price = () => {
  return (
    <>
      <div className="font-bold text-3xl my-2">Cennik</div>
      <div className="flex flex-row flex-wrap">
        <CardLink animated={true} href="#contact" image="apartment-green.svg" alt="price-apartment" title="Mieszkanie"
                  htmlText={[
                    <div key="price-apartment-price" className="font-medium text-xl my-2">Od 290 zł</div>,
                    <div key="price-apartment-time" className="font-medium text-xl my-2">Realizacja do 3 dni
                      roboczych</div>]}/>
        <CardLink animated={true} href="#contact" image="home-green.svg" alt="price-home" title="Dom"
                  htmlText={[
                    <div key="price-home-price" className="font-medium text-xl my-2">Od 490 zł</div>,
                    <div key="price-home-time" className="font-medium text-xl my-2">Realizacja do 3 dni
                      roboczych</div>]}/>
        <CardLink animated={true} href="#contact" image="house-day-green.svg" alt="price-premises"
                  title="Lokal użytkowy"
                  htmlText={[
                    <div key="price-premises-price" className="font-medium text-xl my-2">Od 490 zł</div>,
                    <div key="price-premises-time" className="font-medium text-xl my-2">Realizacja do 3 dni
                      roboczych</div>]}/>
        <CardLink animated={true} href="#contact" image="industry-windows-green.svg" alt="price-industry"
                  title="Inny budynek"
                  htmlText={[
                    <div key="price-industry-price" className="font-medium text-xl my-2">Od 590 zł</div>,
                    <div key="price-industry-time" className="font-medium text-xl my-2">Realizacja do 5 dni
                      roboczych</div>]}/>
        <CardLink animated={true} href="#contact" image="ruler-combined-green.svg" alt="price-measure"
                  title="Inwentaryzacja"
                  htmlText={[
                    <div key="price-measure-price" className="font-medium text-xl my-2">Cena ustalana
                      indywidualnie</div>]}/>
      </div>
    </>
  )
}

export default Price;