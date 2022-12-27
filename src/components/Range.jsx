import {formatearDinero} from '../helpers/formatear'

function Range({cantidad,setCantidad}) {
    
  const min = 500000
  const max = 3000000
  const step = 100000

  function handleOperar(arg) {
    if (arg === 'resta') {
      if (cantidad > min) {
        setCantidad(cantidad - step)
      }
    } else if (arg === 'suma') {
      if (cantidad < max) {
        setCantidad(cantidad + step)
      }
    }
  }


  return (
    <div id="Range">
      <div id="buttons">
                <button onClick={() => handleOperar('resta')}>-</button>
                <button onClick={() => handleOperar('suma')}>+</button>
            </div>
        <input 
            id='range' 
            type="range"
            value={cantidad}
            onChange={e => setCantidad(+e.target.value)}
            min={min}
            max={max}
            step={step} />
        
        <h3>Tu prestamo: <span className='span'>{formatearDinero(cantidad)}</span></h3>
    </div>
  )
}

export default Range