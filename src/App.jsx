// import { useState } from 'react'
import './App.css'
// components
import { Header } from './components/Header.jsx'
import { KitsSection } from './components/KitsSection.jsx'
import { WppButton } from './components/WppButton.jsx'
import { CustomKitSection } from './components/CustomKitSection.jsx'

function App() {

  return (
    <>
      <Header />

      <main className='main'>
      <h1 className='main-title'>¡Comprá tu kit de cultivo indoor al mejor precio!</h1>
      <KitsSection />
      <CustomKitSection />
      <WppButton />
      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
