function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

let resultado = 0

  for(let i = 1; i <= n;i++){
    resultado = resultado + i
  }
  return resultado
}

console.log(sumarHastaN(7));


module.exports = sumarHastaN;
