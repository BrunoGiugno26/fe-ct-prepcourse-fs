function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  //let textoDadoVuelta = ""

  //for(let i = string.length- 1; i >= 0; i--){
  //  textoDadoVuelta = textoDadoVuelta + string[i]
  //}

  //if(string=== textoDadoVuelta){
  //  return true
  //}else{
  //return false
  //}

//let i = 0
//let j = string.length -1

//while( i < j){
//  if(string[i]!== string[j]){
//    return false
//  }
//    i++
//    j--
//}
//return true

return string === string.split("").reverse().join("")
}

console.log(esPalindromo("neuquen"));

module.exports = esPalindromo;