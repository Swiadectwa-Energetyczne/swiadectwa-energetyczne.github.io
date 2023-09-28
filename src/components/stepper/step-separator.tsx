import Image from 'next/image';

export const StepSeparator = () => {
  return (
    <Image className="mx-4 hidden lg:flex" width={36} height={36} alt="Krok3" src="angle-right-green.svg"/>
  )
}

export default StepSeparator;