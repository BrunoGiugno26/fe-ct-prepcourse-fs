function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let arrayConDuplicados = [];

  for(let i = 0; i < array.length; i++){
    arrayConDuplicados.push(array[i]*2)
  }
  return arrayConDuplicados
}

console.log(duplicarElementos([1,2,3,4,5]));



module.exports = duplicarElementos;
