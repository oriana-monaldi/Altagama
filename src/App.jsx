import './App.css'
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import Mision from './components/Mision'
import Contacto from './components/Contacto'
import NuestrosServicios from './components/NuestrosServicios'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className='bg-gradient-to-r from-black to-[#1a1a1a] text-white w-full overflow-x-hidden'>
      <Navbar/>
      <Inicio/>
      <NuestrosServicios/>
      <Servicios/>
      <Mision/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App

