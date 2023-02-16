import CartItem from '@/components/cards/CartItem'
import StepComponent from '@/components/pago/StepComponent'
import Title from '@/components/shared/Title'

const index = () => {
  return (
    <main className='p-6 bg-bgColor'>
      {<StepComponent />}
      <div className='mt-10'>
        <Title>Tu compra</Title>
        <div className='flex flex-col gap-4 mt-4'>
          <CartItem readOnly />
          <CartItem readOnly />
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-4'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Subtotal
          </p>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            $7.052
          </p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Envío
          </p>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>$500</p>
        </div>
        <div className='flex justify-between mt-4'>
          <p className='text-base font-normal leading-6 text-white'>Total</p>
          <p className='text-base font-normal leading-6 text-white'>$7.552</p>
        </div>
      </div>
    </main>
  )
}

export default index
