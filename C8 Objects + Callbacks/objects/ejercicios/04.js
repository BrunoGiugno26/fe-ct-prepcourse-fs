function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

if(objeto[propiedad] === undefined){
   return false
} else{
   return true
}

   //return objeto.hasOwnProperty(propiedad)
}
module.exports = verificarPropiedad;
