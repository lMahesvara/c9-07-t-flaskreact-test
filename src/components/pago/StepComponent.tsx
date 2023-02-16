import { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const StepComponent = () => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  switch (step) {
    case 1:
      return <FirstStep handleNextStep={handleNextStep} />
    case 2:
      return (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )
    case 3:
      return <ThirdStep handlePrevStep={handlePrevStep} />
    default:
      return <FirstStep handleNextStep={handleNextStep} />
  }
}

export default StepComponent
