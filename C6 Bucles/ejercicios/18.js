function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let resultado = 1

  for(let i = a; i <= b; i++){
    resultado = resultado * i
  }

  if(resultado === -0){
    return 0
  }
  Math.abs(resultado)

  return resultado
}

console.log(productoEntreNúmeros(-6,6));


module.exports = productoEntreNúmeros;