import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex w-full items-center justify-between bg-yellow-50 px-8 py-12'>
      <Link to='/'>
        <h1 className='text-2xl font-black'>#VANLIFE</h1>
      </Link>
      <nav className='flex gap-4 font-semibold uppercase'>
        <Link className='hover:underline hover:underline-offset-8' to='/host'>Host</Link>
        <Link className='hover:underline hover:underline-offset-8' to='/about'>About</Link>
        <Link className='hover:underline hover:underline-offset-8' to='/vans'>Vans</Link>
      </nav>
    </header>
  )
}
export default Header
