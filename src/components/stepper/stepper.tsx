import Step from '@/components/stepper/step';
import StepSeparator from '@/components/stepper/step-separator';

interface StepperProps {
  animation?: boolean;
  stepperData: StepperData[];
}

export const Stepper = ({animation, stepperData}: StepperProps) => {
  return (
    <div className="flex flex-row justify-between flex-wrap">
      {
        stepperData.map((data, i) => {
          if (i === 0)
            return <Step stepKey={"step" + i} animation={animation ?? false} alt={data.alt} text={data.text} image={data.image}/>
          return <>
            <StepSeparator/>
            <Step stepKey={"step" + i} animation={animation ?? false} alt={data.alt} text={data.text} image={data.image}/>
          </>
        })
      }
    </div>
  )
}

export default Stepper;