import Link from 'next/link'

const ConfirmCard = () => {
  return (
    <article className='rounded-2xl border border-[#e8e8e8] '>
      <div className='w-full p-4 m-0 border-2 border-primary rounded-2xl'>
        <div className='flex justify-between'>
          <p className='text-base font-medium leading-4 text-white'>Envío</p>
          <Link
            className='text-base font-normal leading-4 text-white underline'
            href={'#'}
          >
            Editar
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4 pt-2'>
        <div className='flex justify-between'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Método de envío
          </p>
          <p className='text-base font-semibold leading-6 text-[#CDCDCD]'>
            Domicilio
          </p>
        </div>
        <div>
          <p className='text-sm font-normal leading-6 text-[#CDCDCD]'>
            adjakdkajdkjadk 305, CABA, Argentina
          </p>
        </div>
      </div>
    </article>
  )
}

export default ConfirmCard
