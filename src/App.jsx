import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'components/Header/Header'
import Home from 'pages/Home'
import About from 'pages/About'
import Vans from 'pages/Vans'
import Footer from 'components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col font-primary'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
