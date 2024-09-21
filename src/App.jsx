import { useState } from 'react'
import { Header } from './Components/header'
import { Home } from './Components/home'
import { Propuestas } from './Components/propuesta'

function App() {


  return (
    <>
      <Header />

      <main>
        <Home />
        <Propuestas />
      </main>
    </>
  )
}

export default App
