function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   //return list.sort((a,b) => b[sortBy] - a[sortBy]);
for(let i = 0; i < list.length;i++){
   for(let j = i+1; j < list.length; j++){
      if(list[i][sortBy] < list[j][sortBy]){
         let temp = list[i]
         list[i]  = list[j]
         list[j]  = temp
      }
   }
}
return list
}

console.log(sort("a",[{a:1,b:3},{a:3,b:2},{a:2,b:40}]));

module.exports = sort;
