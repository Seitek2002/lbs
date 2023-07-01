import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Click me</button>
    </>
  )
}

export default App
