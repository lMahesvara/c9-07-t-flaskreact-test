import React, { useState } from 'react'
import Title from '../shared/Title'
import { OpcionesEnvio } from '@/types/Enums'
import RadioBtn from '../shared/RadioBtn'
import Steps from '../steps/Steps'

type FirstStepProps = {
  handleNextStep: () => void
}

const FirstStep = ({ handleNextStep }: FirstStepProps) => {
  const [picked, setPicked] = useState('')

  const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    setPicked(e.target.value)
  }

  return (
    <div className='flex flex-col justify-between flex-1 min-h-checkout'>
      <div>
        <div className='mb-2'>
          <Steps numberStep={1} />
        </div>
        <Title>Opciones de envío</Title>
        <div className='flex flex-col gap-4 mt-4'>
          <RadioBtn
            img='icons/car-shipping.svg'
            label={OpcionesEnvio.EnvioDomicilio}
            amount={500}
            onChange={handlePick}
          />
          <RadioBtn
            img='icons/Basket.svg'
            label={OpcionesEnvio.RecogerTienda}
            amount={0}
            onChange={handlePick}
          />
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full h-12 bg-primary text-white disabled:text-[#D9D9D9] disabled:bg-[#999999] text-base leading-6 font-medium text-center rounded-lg '
          disabled={picked === ''}
          onClick={handleNextStep}
        >
          Elegir opción de envío
        </button>
        <button className='bg-[#0F0F0F] text-white border-2 border-primary rounded-lg text-base leading-4 font-medium track-[-0.17px] h-12 w-full mt-4 '>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default FirstStep
