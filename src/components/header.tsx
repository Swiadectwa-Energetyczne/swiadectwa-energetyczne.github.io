import HeaderNavigation from '@/components/header-navigation';

export default function Header() {
  return (
    <header className="flex flex-row justify-between text-l font-semibold xl:mx-64 xl:my-10 mx-4 my-6">
      <a href="/" className="py-2 px-5 rounded-full justify-self-center font-bold text-3xl lg:hover:bg-button-hover">Świadectwa Charakterystyki Energetycznej</a>
      <div className="lg:flex items-center space-x-5 text-xl hidden">
        {/*TODO burger button*/}
        <HeaderNavigation href="#about" text="O mnie"/>
        <HeaderNavigation href="#price" text="Cennik"/>
        <HeaderNavigation href="#why" text="ŚChE - Dlaczego?"/>
        <HeaderNavigation href="#how" text="Jak zamówić?"/>
        <HeaderNavigation href="#contact" text="Kontakt"/>
      </div>
    </header>
  )
}