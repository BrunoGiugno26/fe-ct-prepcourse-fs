function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if( num %2 === 0 ){
    return true
  }else{
    return false
  }
}
console.log(esPar(2));
console.log(esPar(3));
console.log(esPar(5));
console.log(esPar(20));


module.exports = esPar;
