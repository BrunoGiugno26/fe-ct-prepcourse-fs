function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  //return array.filter(numero => numero %2 === 0);

  let arrayNuevo = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] %2 === 0){
      arrayNuevo.push(array[i])
    }
  }
  return arrayNuevo
}

console.log(filtrarNumerosPares([1,2,3,4,5,6]));



module.exports = filtrarNumerosPares;
