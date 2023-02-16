import Link from 'next/link'
import { useState } from 'react'
import Sidebar from './Sidebar'
import SearchInput from './SearchInput'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  //function that pressing the cart button go to the cart page

  const toggleMenu = (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const toggleSearch = () => {
    setIsSearch(!isSearch)
  }

  return (
    <>
      <nav className='flex items-center justify-between px-4 py-2 mx-auto border-b border-white max-w-7xl '>
        <div className='flex items-center justify-center gap-4'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <img src='/icons/Close.svg' alt='CloseMenu' />
            ) : (
              <img src='/icons/HamburgerMenu.svg' alt='HamburgerMenu' />
            )}
          </button>
          <Link href='/'>Logo</Link>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <button onClick={toggleSearch}>
            <img src='/icons/Search.svg' alt='Search' />
          </button>
          <button className='relative'>
            <img src='/icons/Cart.svg' alt='ShoppingCart' />
            <span className='absolute -top-2 -right-3 badge badge-xs'>2</span>
          </button>
        </div>
        <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
      {isSearch && <SearchInput />}
    </>
  )
}

export default Navbar
