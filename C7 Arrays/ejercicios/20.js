function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if(array.length <= 1){
    return true
  }

  for(let i = 1; i < array.length;i++){
    if(array[i]!== array[0]){
      return false
    }
  }
  return true
}

console.log(todosIguales([2,2,2,2]));
console.log(todosIguales([1,2,2,2]));
console.log(todosIguales([1,2,3,4]));


module.exports = todosIguales;
