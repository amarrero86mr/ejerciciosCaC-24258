/* 
Autor:
Version:
Fecha:
Descripción: estructuras de control para logIn
*/

let nota = 5;

//nota = parseInt(prompt('ingrese la nota del alumno'));
let calif;

// // if anidados
// if(nota >= 8 && nota <= 10) {
//     calif = "Excelente";
// } else if(nota >= 6 && nota < 8) {
//     calif = "Muy bien";
// } else if(nota >= 4 && nota < 6) {
//     calif = "Bien";
// } else if(nota >= 0 && nota < 4) {
//     calif = "Insuficiente";
// } else {
//     calif = "Nota incorrecta";
// }



// switch (nota) {
//     case "10":
//       calif = "Sobresaliente";
//       break;
//     case "9":
//     case "8":
//     case "7":
//       calif = "Aprobado";
//       break;
//     case "6":
//     case "5":
//     case "4":
//     case "3":
//     case "2":
//     case "1":
//       calif = "No Aprobado";
//       break;
//    case "0":
//       calif = "Insuficiente";
//     default:
//       calif = "La nota introducida es erronea"
//       break;
//   }
  


switch(true) {
    case (nota >= 8 && nota <= 10):
        calif = "Excelente";
        break;
    case (nota >= 6 && nota < 8):
        calif = "Muy bien";
        break;
    case (nota >= 4 && nota < 6):
        calif = "Bien";
        break;
    case (nota >= 0 && nota < 4):
        calif = "Insuficiente";
        break;
    default:
        calif = "Nota incorrecta";
}

console.log('calificacion: ' + calif);