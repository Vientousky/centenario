import { useState } from 'react'
import { Header } from './Components/header'
import { Home } from './Components/home'
import { Nosotros } from './Components/nosotro'
import { Propuestas } from './Components/propuesta'

function App() {


  return (
    <>
      <Header />

      <main>
        <Home />
        <Nosotros/>
        <Propuestas />
      </main>
    </>
  )
}

export default App
