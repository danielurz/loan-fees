import {formatearDinero} from '../helpers/formatear'

function Total({plazo,cantidad}) {

    function calcularTotalPago() {
        let total

        // Cantidad
        if(cantidad < 1000000) {
            total = cantidad * 1.4
        } else if (cantidad >= 1000000 && cantidad < 1750000) {
            total = cantidad * 1.3
        } else if (cantidad >= 1750000 && cantidad < 2500000) {
            total = cantidad * 1.2
        } else {
            total = cantidad * 1.1
        }

        //Plazo
        if(plazo === 6) {
            total *= 1.1
        } else if (plazo === 12) {
            total *= 1.2
        } else if (plazo === 24) {
            total *= 1.3
        }

        return total
    }

  return (
    <div id="Total">
        <h2>Resumen <span className="span">de pagos</span></h2>
        <p>Plazo: <span className="span">{`${plazo} Meses`}</span></p>
        <p>Pagos Mensuales: <span className="span">{formatearDinero(calcularTotalPago()/plazo)}</span></p>
        <p>Pago Total: <span className="span">{formatearDinero(calcularTotalPago())}</span></p>
    </div>
  )
}

export default Total