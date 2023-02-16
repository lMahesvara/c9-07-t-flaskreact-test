import NavLink from './NavLink'
import { HiOutlineUserCircle } from 'react-icons/hi'

type props = {
  isOpen: boolean
  toggleMenu: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Sidebar = ({ isOpen, toggleMenu }: props) => {
  return (
    <>
      <div
        className={`${
          !isOpen ? 'invisible' : 'visible'
        }  fixed top-10 left-0 -z-10 h-full w-full bg-black/50`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${
          isOpen ? 'left-0 ' : '-left-full'
        } fixed gap-2 top-10 -z-10 flex h-full w-3/4 flex-col bg-primary transition-all duration-500 ease-in-out py-4 divide-y divide-white`}
      >
        <div>
          <NavLink href='/login'>
            <HiOutlineUserCircle className='w-6 h-6' /> Log In / Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink href='/'>
            <img src='/icons/Home.svg' alt='Home' /> Inicio
          </NavLink>
          <NavLink href='/category/new-releases'>
            <img src='/icons/Novedades.svg' alt='News' /> ¡Nuevos ingresos!
          </NavLink>
          <NavLink href='/category/figures'>
            <img src='/icons/Figura.svg' alt='Products' /> Figuras
          </NavLink>
          <NavLink href='/category/cards'>
            <img src='/icons/Cartas.svg' alt='Home' /> Cartas
          </NavLink>
          <NavLink href='/category/comics'>
            <img src='/icons/Comics.svg' alt='News' /> Comics
          </NavLink>
          <NavLink href='/category/clothing'>
            <img src='/icons/Shirt.svg' alt='Products' /> Indumentaria
          </NavLink>
        </div>
        <div>
          <NavLink href='/faq'>
            <img src='/icons/Faq.svg' alt='FAQ' /> FAQ
          </NavLink>
          <NavLink href='/contacto'>
            <img src='/icons/Mail.svg' alt='Contact' /> Contáctanos
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar
