import Image from 'next/image';

export const StepSeparator = () => {
  return (
    <Image className="mx-4 hidden lg:flex max-h-8" width={32} height={32} alt="Krok3" src="angle-right-green.svg"/>
  )
}

export default StepSeparator;