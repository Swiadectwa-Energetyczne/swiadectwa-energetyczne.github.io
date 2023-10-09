import Image from 'next/image';

export const Hi = () => {
  return (
    <div className="font-bold text-xl lg:text-3xl mb-24 text-font-secondary">
      <div
        className="p-4 hidden lg:flex flex-col items-center bg-secondary-bg rounded-full">
        <div className="flex flex-row">Cześć, potrzebujesz Świadectwo Charakterystyki Energetycznej?</div>
        <div>Jeśli tak, zapraszam!</div>
      </div>
      <div
        className="p-4 lg:hidden flex flex-col bg-secondary-bg">
        <div className="flex flex-row">Cześć, potrzebujesz Świadectwo Charakterystyki Energetycznej?</div>
        <div>Jeśli tak, zapraszam!</div>
      </div>
    </div>
  )
}

export default Hi;