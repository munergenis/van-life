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
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<Vans.VanDetails />} />
          <Route element={<Host />}>
            <Route path='/host' element={<Host.Dashboard />} />
            <Route path='/host/income' element={<Host.Income />} />
            <Route path='/host/reviews' element={<Host.Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
