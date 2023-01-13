// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray=[];
  for(var clave in objeto){
    nuevoArray.push([clave,ojeto[clave]])
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(i=0; i<string.length; i++){
    if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]] = objeto[string[i]] + 1;
    }else{
      objeto[string[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  minusculas="";
  mayusculas="";
  sAlReves =  mayusculas + minusculas

  for(var i=0; i<s.length; i++){
    if(s[i] === s[i].toLowerCase() ){
      minusculas += s[i];
    }else{
      mayusculas += s[i];
    }
  }
  return sAlReves
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var final="";
  var array = str.split(" "); // ['The', 'Henry', ...]
  
  for(i=0; i<array.length; i++){
    final= final + array[i].split("").reverse().join("") + " "
  };
  return final
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString() === numero.toString().split('').reverse().join('')){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //'hola como estas?' ----- separada = ['hola', 'como', 'estas?'] ---  
  final = []; 

  for(i=0; i<cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      continue; 
    }else{
      final += cadena[i]; 
    }
  }
  return final
}  
  // return cadena.split('').filter((e)) => e !== 'a'
 // && e !== 'b' && e !== 'c').join("")


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while(cambio){
    cambio = false;
    for(i=0; i<arr.length - 1; i++){
      var aux = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = aux;
      cambio = true;
    }
  }
  return arr;

  //return arr.sort(function(a, b){
  //  if(a.length > b.length ){
  //    return 1
  //  }else if (a.length<b.length){
  //    return -1
  //  }else{
  //    return 0
  //  }
  //  }
  //})


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray=[];

  for(i=0; i<arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i])){
      nuevoArray.push(arreglo1[i]);
    }
  }
  return nuevoArray;
};



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
