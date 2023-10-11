import Stepper from '@/components/stepper/stepper';

export const How = () => {

  const stepperData: StepperData[] = [
    {key: "step1", alt: "Wypełnienie formularza", image: "file-edit-green.svg", text: "Wypełnienie formularza kontaktowego"},
    {key: "stepSeparator1", isSeparator: true},
    {key: "step2", alt: "Kontakt", image: "call-incoming-green.svg", text: "Kontakt oraz doradztwo w celu uzyskania informacji na temat budynku"},
    {key: "stepSeparator2", isSeparator: true},
    {key: "step3", alt: "Cena", image: "file-invoice-dollar-green.svg", text: "Ustalenie ceny oraz opłacenie Świadectwa Charakterystyki Energetycznej"},
    {key: "stepSeparator3", isSeparator: true},
    {key: "step4", alt: "ŚChE", image: "diploma-green.svg", text: "Przygotowanie Świadectwa Charakterystyki Energetycznej"}
  ]

  return (
    <>
      <div className="font-bold text-3xl my-2">Jak zamówić?</div>
      <Stepper animation={true} stepperData={stepperData}/>
    </>
  );
}

export default How;