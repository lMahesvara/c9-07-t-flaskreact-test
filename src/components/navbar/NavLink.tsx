import Link from "next/link"

type props = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: props) => {
  return (
    <Link
      href={href}
      className="text-white flex items-center gap-2 py-2 px-4 hover:bg-secondary"
    >
      {children}
    </Link>
  )
}

export default NavLink
