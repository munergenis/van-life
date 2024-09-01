import { Outlet, NavLink } from 'react-router-dom'

const Host = () => {
  const getNavLinkStyles = ({ isActive }) => `underline-offset-4 ${isActive && 'underline'}`

  return (
    <div className='flex flex-col gap-6 p-10'>
      <nav>
        <ul className='flex gap-4'>
          <li><NavLink className={getNavLinkStyles} to='/host' end>Dashboard</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='/host/income'>Income</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='/host/vans'>Vans</NavLink></li>
          <li><NavLink className={getNavLinkStyles} to='/host/reviews'>Reviews</NavLink></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
export default Host
