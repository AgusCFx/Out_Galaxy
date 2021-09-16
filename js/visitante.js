let userName = prompt("Bienvenido, por favor ingrese su nombre:\n(no más de 10 caracteres)")

// switch (userName) { 
//     case userName = '' : 
//     userName = prompt("Por favor solo ingrese un nombre:\n(no más de 10 caracteres)")
//     break;
//     case userName.length() :
//         userName = prompt("Querido ¿que parte de no más de 10 caracteres no se entiende? \nIngresá un NOMBRE DE 10 CARACTERES O MENOS")
//     break;
// }

// if (!userName) {
//     userName = prompt("Por favor solo ingrese un nombre:\n(no más de 10 caracteres)")
// }else if(userName.length() > 10){
//     userName = prompt("Querido ¿que parte de no más de 10 caracteres no se entiende? \nIngresá un NOMBRE DE 10 CARACTERES O MENOS")
// }

document.getElementById('userVisit').innerHTML = userName;
console.log(userVisit.innerHTML);


