import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import Home from 'src/Home'
import About from 'src/About'
import Vans from 'src/Vans'
import Footer from 'src/components/Header/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen font-inter'>
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
