export default function Header() {
  return (
    <header className="flex flex-row justify-between text-l font-semibold xl:mx-64 xl:my-10 mx-4 my-6">
      <a href="" className="py-2 px-5 rounded-full justify-self-center font-bold text-3xl hover:bg-button-hover">Świadectwa Charakterystyki Energetycznej</a>
      <div className="md:flex items-center space-x-5 text-xl hidden">
        <a className="py-2 px-5 rounded-full hover:bg-button-hover" href="#o-mnie">O mnie</a>
        <a className="py-2 px-5 rounded-full hover:bg-button-hover"  href="#certyfikaty">Moje certyfikaty</a>
        <a className="py-2 px-5 rounded-full hover:bg-button-hover"  href="#kontakt">Kontakt</a>
      </div>
    </header>
  )
}