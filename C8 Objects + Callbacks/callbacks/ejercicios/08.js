const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  //const elemento = array.find(callback);

  //if(elemento === undefined){
  //  return "No se encontró el elemento"
  //}
  //else{
  //return elemento
  //}

const elementoEncontrado = array.find(function(elemento){
  return callback(elemento)
})

if(elementoEncontrado === undefined){
  return "No se encontró el elemento"
}else{
  return elementoEncontrado
}
}

module.exports = buscarElemento;
