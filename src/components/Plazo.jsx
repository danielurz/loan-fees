function Plazo({plazo,setPlazo}) {
  return (
    <div id="Plazo">
        <h2>Elige un <span className="span">Plazo a pagar</span></h2>  
        <select onChange={e => setPlazo(+e.target.value)} value={plazo}>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
        </select>
    </div>
  )
}

export default Plazo