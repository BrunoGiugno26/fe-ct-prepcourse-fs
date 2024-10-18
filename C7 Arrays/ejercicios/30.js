function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let numerosRepetidos = [];

  return numeros.find(function(numeros){
    if(numerosRepetidos.includes(numeros)){
      return true;
    }

    numerosRepetidos.push(numeros)
    return null;
  });
}


  
  console.log(encontrarElementoRepetido([5, 1, 2, 5, 3])); // Imprime: 5
  console.log(encontrarElementoRepetido([10, 20, 30]));    // Imprime: null
  
  module.exports = encontrarElementoRepetido;
  
