 export function formatearDinero(valor) {
    const formatter = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0, 

    })
    return formatter.format(valor)
  }