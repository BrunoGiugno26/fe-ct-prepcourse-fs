function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  //return array.map(elemento => elemento.toUpperCase());

  let arrayConMayusculas = [];

  for(let i = 0; i < array.length; i++){
    arrayConMayusculas.push(array[i].toUpperCase())
  }
  return arrayConMayusculas;
}

console.log(convertirStringAMayusculas(["sasd","dsds","ghfs"]));





module.exports = convertirStringAMayusculas;
