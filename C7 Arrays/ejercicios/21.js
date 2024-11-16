function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arrayNuevo = [];
  let mesesBuscados = ["Enero","Marzo","Noviembre"];

  for(let i = 0; i < array.length; i++){
    if(mesesBuscados.includes(array[i])){
      arrayNuevo.push(array[i])
    }
  }

  if(arrayNuevo.length!==3){
    return "No se encontraron los meses pedidos"
  }
  return arrayNuevo
}

console.log(mesesDelAño(["Enero","Marzo","Noviembre"]));


module.exports = mesesDelAño;
