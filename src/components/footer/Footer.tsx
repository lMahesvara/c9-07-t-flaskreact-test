const Footer = () => {
  return (
    <footer className='bg-bgColor text-white w-full pt-6'>
      <div className='w-full bg-primary py-2 px-4'>Logo</div>
      <div className='flex justify-around py-4 text-xs border-b font-normal border-primary  '>
        <ul className='space-y-2'>
          <li>Home</li>
          <li>Productos</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
        <ul className='space-y-2'>
          <li>Home</li>
          <li>Productos</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div>
        <p className='text-text-footer text-xs mx-auto text-center py-4'>
          © 2023 Comics SRL - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
