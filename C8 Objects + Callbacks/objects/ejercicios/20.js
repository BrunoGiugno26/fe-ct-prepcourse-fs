function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  
  let totalDeLikes = 0

  for(let i = 0; i < objetoUsuario.posts.length;i++){
    totalDeLikes = totalDeLikes+= objetoUsuario.posts[i].likes
  }
  return totalDeLike

  //let totalDeLikes = 0

  //objetoUsuario.posts.forEach(post => {
  //  totalDeLikes += post.likes
  //});
  //return totalDeLikes

  //return objetoUsuario.posts.reduce((acumulador,post)=> acumulador + post.likes,0);
}




module.exports = sumarLikesDeUsuario;
