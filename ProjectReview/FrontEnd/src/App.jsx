import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './Components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form/>
    </div>
  )
}

export default App
