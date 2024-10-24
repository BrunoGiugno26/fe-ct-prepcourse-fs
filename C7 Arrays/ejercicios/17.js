function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let suma = 0

  for(let i = 0; i < arrayOfNums.length;i++){
    suma += arrayOfNums[i]
  }
  return suma
}

console.log(agregarNumeros([2,3,4,5,6]));


module.exports = agregarNumeros;
