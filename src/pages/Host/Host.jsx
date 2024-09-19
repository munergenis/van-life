import { Outlet, NavLink } from 'react-router-dom'

const Host = () => {
  const getNavLinkStyles = ({ isActive }) => `underline-offset-4 hover:underline ${isActive && 'underline font-semibold'}`

  return (
    <div className='flex flex-col gap-10 p-10'>
      <nav>
        <ul className='flex gap-4'>
          <li><NavLink className={getNavLinkStyles} to='.' end>Dashboard</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='income'>Income</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='vans' end>Vans</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='reviews'>Reviews</NavLink></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
export default Host
