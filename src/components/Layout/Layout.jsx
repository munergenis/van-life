import Header from 'components/Layout/Header'
import PageMain from 'components/Layout/PageMain'
import Footer from 'components/Layout/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col font-primary'>
      <Header />
      <PageMain>
        <Outlet />
      </PageMain>
      <Footer />
    </div>

  )
}
export default Layout
