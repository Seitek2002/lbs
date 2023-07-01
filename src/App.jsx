import './App.css'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <div style="width: 100px; height: 100px;"></div>
      <button onClick={() => setNum(num + 1)}>Click me</button>
    </>
  )
}

export default App
