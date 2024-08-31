import { NavLink } from 'react-router-dom'

const Header = () => {
  const getNavLinkStyles = ({ isActive }) => `underline-offset-8 hover:underline ${isActive && 'underline text-orange-700'}`

  return (
    <header className='sticky top-0 z-50 flex w-full items-center justify-between bg-yellow-50 px-8 py-12'>
      <NavLink to='/'>
        <h1 className='text-2xl font-black'>#VANLIFE</h1>
      </NavLink>
      <nav className='flex gap-4 font-semibold uppercase'>
        <NavLink className={getNavLinkStyles} to='/host'>Host</NavLink>
        <NavLink className={getNavLinkStyles} to='/about'>About</NavLink>
        <NavLink className={getNavLinkStyles} to='/vans'>Vans</NavLink>
      </nav>
    </header>
  )
}
export default Header
