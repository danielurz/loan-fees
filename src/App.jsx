import { useState } from 'react'
import Header from './components/Header'
import Plazo from './components/Plazo'
import Range from './components/Range'
import Total from './components/Total'

function App() {
  const [cantidad, setCantidad] = useState(1500000)
  const [plazo, setPlazo] = useState(6)
  

  return (
    <div className="App">
      <Header/>
      <Range
          cantidad={cantidad}
          setCantidad={setCantidad}/>
      <Plazo
          plazo={plazo}
          setPlazo={setPlazo}/>
      <Total
          plazo={plazo}
          cantidad={cantidad}/>
    </div>

  )
}

export default App
