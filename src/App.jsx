import './App.css'
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import Mision from './components/Mision'
import Contacto from './components/Contacto'
import NuestrosServicios from './components/NuestrosServicios'
import Footer from './components/Footer'

function App() {

  return (

 <div className='bg-gradient-to-r from-gray-900 to-black  text-white' >

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

