import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import About from 'pages/About'
import Vans from 'pages/Vans/index'
import Host from 'pages/Host/index'

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
            <Route path='vans/:id' element={<Host.HostVans.HostVanDetails />} />

            <Route path='reviews' element={<Host.Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
