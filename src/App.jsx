// import { useState } from 'react'
import './App.css'
// components
import { Header } from './components/Header.jsx'
import { KitsSection } from './components/KitsSection.jsx'
import { WppButton } from './components/WppButton.jsx'
import { CustomKitSection } from './components/CustomKitSection.jsx'
import { Footer } from './components/Footer.jsx'


function App() {
  const h1Text = "¡Comprá tu kit de cultivo indoor al mejor precio!"
  return (
    <>
      <Header />

      <main className='main'>
      <h1 className='main-title'>{h1Text}</h1>
        <KitsSection />
        <CustomKitSection />
        <WppButton />
      </main>

      < Footer />
    </>
  )
}

export default App
