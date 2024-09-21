import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import About from 'pages/About'
import Vans from 'pages/Vans/index'
import Host from 'pages/Host/index'
import HostVanDetails from 'pages/Host/HostVans/HostVanDetails/index'
import Page404 from 'pages/Page404'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<Vans.VanDetails />} />

          <Route path='host' element={<Host />}>
            <Route index element={<Host.Dashboard />} />
            <Route path='income' element={<Host.Income />} />

            <Route path='vans' element={<Host.HostVans />} />
            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanDetails.Info />} />
              <Route path='pricing' element={<HostVanDetails.Pricing />} />
              <Route path='photos' element={<HostVanDetails.Photos />} />
            </Route>

            <Route path='reviews' element={<Host.Reviews />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
