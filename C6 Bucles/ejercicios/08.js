function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:

   //return a >= 0 && a < 10 // en realidad solamente es el operador < que indica que un numero es menor

   if(a >= 0 && a < 10){
      return true
   } else{
      return false
   }
}

console.log(esPositivoOInferiorA10(10));


module.exports = esPositivoOInferiorA10;
