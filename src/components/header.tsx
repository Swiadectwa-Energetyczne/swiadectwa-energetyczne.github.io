export default function Header() {
  return (
    <div className="flex flex-row justify-between text-l font-semibold">
      <a href="" className="py-2 px-5 rounded-full justify-self-center font-bold text-3xl hover:bg-button-hover">Świadectwa Charakterystyki Energetycznej</a>
      <div className="flex items-center space-x-5 text-xl">
        <a className="py-2 px-5 rounded-full hover:bg-button-hover" href="#o-mnie">O mnie</a>
        <a className="py-2 px-5 rounded-full hover:bg-button-hover"  href="#certyfikaty">Moje certyfikaty</a>
        <a className="py-2 px-5 rounded-full hover:bg-button-hover"  href="#kontakt">Kontakt</a>
      </div>
    </div>
  )
}