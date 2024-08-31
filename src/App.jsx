import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import About from 'pages/About'
import Vans from 'pages/Vans/Vans'
import VanDetails from 'pages/Vans/VanDetails'
import Dashboard from 'pages/Host/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetails />} />
          <Route path='/host' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
