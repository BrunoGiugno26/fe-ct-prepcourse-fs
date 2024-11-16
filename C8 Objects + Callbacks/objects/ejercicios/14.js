function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

//if(objetoUsuario.email !== undefined && objetoUsuario.email !== null){
//  return true
//}
//  else{
//  return false
//}
  //return objetoUsuario.email !== undefined && objetoUsuario.email !== null

  return objetoUsuario.email != null 
  
  // La razón para utilizar != en vez de !== en este caso es para aprovechar una característica específica de JavaScript: el operador != verifica si el valor es igual a null o undefined sin distinguir entre ellos, lo cual es útil para saber si una variable simplemente "no tiene valor".

  //Aquí está la diferencia:
  
  //!== (estrictamente diferente): Compara valores y tipos, por lo que null !== undefined es true (los considera distintos).
  //!= (diferente): Compara solo el valor, ignorando el tipo. En este caso, null != undefined es false, porque los trata como equivalentes.
  //En nuestro caso:
  
  //javascript
    //return objetoUsuario.email != null;
  //Este código devolverá true si objetoUsuario.email tiene un valor (cualquier valor que no sea null o undefined). Con !=, estamos verificando que email sea algo distinto de null o undefined sin tener que verificar ambos por separado.
  
  //Si usáramos !==, tendríamos que hacer algo como esto:
  
  //javascript
  //return objetoUsuario.email !== null && objetoUsuario.email !== undefined;
  //Ambos métodos funcionan, pero el primero es más breve y, en este caso, más idiomático en JavaScript.
}

module.exports = tieneEmail;
