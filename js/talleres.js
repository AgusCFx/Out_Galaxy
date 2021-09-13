class Comunication {
    constructor(nombre, apellido, contacto, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.contacto = contacto;
        this.mensaje = mensaje;
        this.turno = false
    }

    nave(param){
        setTimeout(() => {
            alert('Gracias ' + this.nombre + ' ' + this.apellido + ', su mensaje fue recibido por ' + param)
        }, 3000);    
    }

    setTurno(){
        this.turno = true;
    }
}

const ERF = "Estacion Rober Frontend";
const ESC = "Estacion Shusha-craft";
const SSS = "Super System32 servicios";
const FSA = "Fireport SA";
const CRC = "Cryo Rex corp";

let nombre;
let apellido;
let contacto;
let mensaje;

function dataMsj (){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese apellido");
    contacto = prompt("Ingrese mail o medio de contacto");
    mensaje = prompt("Ingrese su mensaje");
    return new Comunication(nombre,apellido,contacto,mensaje)
}

const ERF_mensaje = document.getElementById('ERF_mensaje')
const ERF_turno = document.getElementById('ERF_turno')
// const botonERF = document.getElementById('ERF_mensaje')
// const botonERF = document.getElementById('ERF_mensaje')
// const botonERF = document.getElementById('ERF_mensaje')

ERF_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(ERF)
})
