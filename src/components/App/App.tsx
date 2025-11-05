import { useState } from 'react'
import css from './App.module.css'


import CafeInfo from '../CafeInfo/CafeInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={css.app}></div>
    </>
  )
}

export default App
