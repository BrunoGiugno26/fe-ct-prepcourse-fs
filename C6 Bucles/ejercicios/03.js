function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if(x > y){
    return x
  } else{
    return y
  }

  //if(x > y){
  //  return x
  //} else if(y>x){
  //  return y
  //} else if (x === y || y === x){
  //  return x || y
  //}

  //return Math.max(x,y)
}

console.log(obtenerMayor(4,2))
module.exports = obtenerMayor;
