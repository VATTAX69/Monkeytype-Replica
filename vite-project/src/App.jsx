import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import OptionsBar from './components/OptionsBar/OptionsBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <main>
          <OptionsBar></OptionsBar>
        </main>
      </div>

    </>
  )
}

export default App
