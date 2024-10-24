function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let indiceMayor = 0

  for(let i = 0; i < array.length; i++){
    if(array[i] > array[indiceMayor]){
      indiceMayor = i
    }
  }
  return indiceMayor
}

console.log(encontrarIndiceMayor([1,5,2,23,32,55,31,3]));



module.exports = encontrarIndiceMayor;
