import Stepper from '@/components/stepper/stepper';

export const How = () => {

  const stepperData: StepperData[] = [
    {alt: "Wypełnienie formularza", image: "file-edit-green.svg", text: "Wypełnienie formularza kontaktowego"},
    {alt: "Kontakt", image: "call-incoming-green.svg", text: "Kontakt w celu uzyskania informacji na temat budynku"},
    {alt: "Cena", image: "hand-holding-usd-green.svg", text: "Ustalenie ceny oraz opłacenie Świadectwa Charakterystyki Energetycznej"},
    {alt: "ŚChE", image: "diploma-green.svg", text: "Przygotowanie Świadectwa Charakterystyki Energetycznej"}
  ]

  return (
    <>
      <div className="font-bold text-3xl my-2">Jak to działa?</div>
      <Stepper animation={true} stepperData={stepperData}/>
    </>
  );
}

export default How;