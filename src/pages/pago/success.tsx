import CartItem from '@/components/cards/CartItem'
import Title from '@/components/shared/Title'
import React from 'react'

const success = () => {
  return (
    <main className='p-6 bg-bgColor'>
      <Title>¡Tu compra fue realizada con éxito!</Title>
      <div className='flex flex-col gap-4 mt-6'>
        <p className='text-base font-normal leading-6 text-white'>
          Resumen de compra
        </p>
        <CartItem readOnly />
        <CartItem readOnly />
      </div>
      <div className='flex flex-col gap-2 mt-14'>
        <div className='flex justify-between'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Método de envío
          </p>
          <p className='text-base font-semibold leading-6 text-[#CDCDCD]'>
            Domicilio
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Método de pago
          </p>
          <p className='text-base font-semibold leading-6 text-[#CDCDCD]'>
            Mercado Pago
          </p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-base font-normal leading-6 text-white'>Total</p>
          <p className='text-base font-normal leading-6 text-white'>$7.552</p>
        </div>
        <div className='mt-4'>
          <button className='w-full h-12 bg-primary text-white disabled:text-[#D9D9D9] disabled:bg-[#999999] text-base leading-6 font-medium text-center rounded-lg '>
            Ver comprobante
          </button>
          <button className='bg-[#0F0F0F] text-white border-2 border-primary rounded-lg text-base leading-4 font-medium track-[-0.17px] h-12 w-full mt-4 '>
            Volver al inicio
          </button>
        </div>
      </div>
    </main>
  )
}

export default success
