import { useState } from 'react'
import { Header } from './Components/header'
import { Home } from './Components/home'
import { Nosotros } from './Components/nosotro'
import { Propuestas } from './Components/propuesta'
import { FAQ } from './Components/pregunta'
import { Contacto } from './Components/contacto'

function App() {


  return (
    <>
      <Header />

      <main>
        <Home />
        <Nosotros />
        <Propuestas />
        <FAQ />
        <Contacto/>
      </main>
    </>
  )
}

export default App
