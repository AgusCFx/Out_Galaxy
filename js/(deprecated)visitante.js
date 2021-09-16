let userName = prompt("Bienvenido, por favor ingrese su nombre:\n(no más de 10 caracteres)");

while (userName == '' || userName.length > 10) {
        if(userName.length > 10){
            userName = prompt("Querido ¿que parte de no más de 10 caracteres no se entiende? \nIngresá un NOMBRE DE 10 CARACTERES O MENOS")
        } else {
            userName = prompt("Por favor solo ingrese un nombre:\n(no más de 10 caracteres)")
        }
}

document.getElementById('userVisit').innerHTML = userName;
// console.log(userVisit.innerHTML);


