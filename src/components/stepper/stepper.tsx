import Step from '@/components/stepper/step';
import StepSeparator from '@/components/stepper/step-separator';

interface StepperProps {
  animation?: boolean;
  stepperData: StepperData[];
}

export const Stepper = ({animation, stepperData}: StepperProps) => {
  return (
    <div className="flex flex-row justify-between flex-wrap items-center">
      {
        stepperData.map(data => data?.isSeparator ?
          <StepSeparator key={data.key}/> :
          <Step key={data.key} animation={animation ?? false} alt={data.alt} text={data.text} image={data.image}/>)
      }
    </div>
  )
}

export default Stepper;