function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  //let texto = palabras[0]

  //for(let i = 1; i < palabras.length; i++){
  //  texto = texto + " " + palabras[i]
  //}

  //return texto

  //return palabras.join(" ")

  let texto = palabras[0]

  for(let i = 1; i < palabras.length;i++){
    texto = texto + " " + palabras[i]
  }
  return texto
}

console.log(dePalabrasAFrase(["ricardo","roberto"]));




module.exports = dePalabrasAFrase;
