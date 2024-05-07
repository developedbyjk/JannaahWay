import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      Insallah our website will be update soon 🌹
    </>
  )
}

export default App
