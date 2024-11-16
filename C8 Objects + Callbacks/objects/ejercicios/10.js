function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:

  objeto[propiedad] = null
  return objeto
}


const juegos = {
  nombre: "The Last Of Us",
  lanzamiento: 2013,
  genero: "Accion Post Apocaliptica"
}

console.log(juegos.genero);

console.log(juegos["nombre"]);



module.exports = agregarPropiedad;
