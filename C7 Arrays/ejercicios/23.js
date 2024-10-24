function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  let arregloNuevo = [];

for(let i = 0; i < 10;i++){
  
  if(i === num){ 
    return "Se interrumpió la ejecución"
  }
  
  num += 2
  arregloNuevo.push(num)
}
return arregloNuevo
}

console.log(breakStatement(2,[2,3,4,5]));


module.exports = breakStatement;
