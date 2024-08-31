import { Outlet, Link } from 'react-router-dom'

const Host = () => {
  return (
    <div className='p-10'>
      <nav>
        <ul className='flex gap-4'>
          <li><Link to='/host'>Dashboard</Link></li>
          <li><Link to='/host/income'>Income</Link></li>
          <li><Link to='/host/vans'>Vans</Link></li>
          <li><Link to='/host/reviews'>Reviews</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
export default Host
