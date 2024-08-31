import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col font-primary'>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}
export default Layout
