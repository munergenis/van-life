import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-8 py-16 bg-yellow-50 flex justify-between'>
      <Link to='/'>
        <h1 className='text-2xl font-black'>#VANLIFE</h1>
      </Link>
      <nav className='flex gap-4 uppercase'>
        <Link className='hover:underline underline-offset-8' to='/about'>About</Link>
        <Link className='hover:underline hover:underline-offset-8' to='/vans'>Vans</Link>
      </nav>
    </header>
  )
}
export default Header
