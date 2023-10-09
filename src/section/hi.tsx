import Image from 'next/image';

export const Hi = () => {
  return (
    <div className="font-bold text-xl lg:text-3xl mb-24 text-font-secondary">
      <div
        className="hidden lg:flex flex-col items-center bg-secondary-bg rounded-full p-6">
        <div className="flex flex-row">Cześć&nbsp;<Image src="grin-alt-white.svg" alt="smile" width={24} height={24}/>
        </div>
        <div>Potrzebujesz Świadectwo Charakterystyki Energetycznej?</div>
        <div>Jeśli tak, zapraszam!</div>
      </div>
      <div
        className="lg:hidden flex flex-col bg-secondary-bg p-6">
        <div className="flex flex-row">Cześć&nbsp;<Image src="grin-alt-white.svg" alt="smile" width={24} height={24}/>
        </div>
        <div>Potrzebujesz Świadectwo Charakterystyki Energetycznej?</div>
        <div>Jeśli tak, zapraszam!</div>
      </div>
    </div>
  )
}

export default Hi;