function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

      //Convertimos ambos strings a minúsculas, luego los convertimos en arreglos, los ordenamos y los unimos de nuevo en un string
      const string1Ordenados = str1.toLowerCase().split("").sort().join("")
      const string2Ordenados = str2.toLowerCase().split("").sort().join("")
         
      // Comparamos los strings ordenados
            return string1Ordenados === string2Ordenados
   }
   
   module.exports = esAnagrama;
