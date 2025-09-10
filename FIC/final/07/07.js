// Crea un array de precios y usa map para calcular un array de precios con IVA aplicado.
const precios = [30, 50, 13, 40, 67]
const preciosConIVA = precios.map(precio => precio * 1.21)

console.log("precio original: ", precios)
console.log("precio con IVA: ", preciosConIVA)