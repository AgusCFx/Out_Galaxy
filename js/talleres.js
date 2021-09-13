// Creacion de clases
class Comunication {
    constructor(nombre, apellido, contacto, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.contacto = contacto;
        this.mensaje = mensaje;
        this.turno = false
        this.matricula;
    }

    nave(param){
        setTimeout(() => {
            alert('Gracias ' + this.nombre + ' ' + this.apellido + ', su mensaje fue recibido por ' + param)
        }, 1500);    
    }

    setTurno(param){
        this.matricula=prompt('Escriba la matricula de su nave');
        this.turno = true;
        alert('Gracias ' + this.nombre + ' ' + this.apellido + ' por realizar su reserva online en ' + param + ', pronto un asesor se pondrá en contacto con usted para coordinar horario de reserva')
    }
}
// ---
// Creacion de Variables
const estacion = ["Estacion Rober Frontend","Estacion Shusha-craft","Super System32 servicios","Fireport SA","Cryo Rex corp"];

let nombre;
let apellido;
let contacto;
let mensaje;

const ERF_mensaje = document.getElementById('ERF_mensaje')
const ERF_turno = document.getElementById('ERF_turno')

const ESC_mensaje = document.getElementById('ESC_mensaje')
const ESC_turno = document.getElementById('ESC_turno')

const SSS_mensaje = document.getElementById('SSS_mensaje')
const SSS_turno = document.getElementById('SSS_turno')

const FSA_mensaje = document.getElementById('FSA_mensaje')
const FSA_turno = document.getElementById('FSA_turno')

const CRC_mensaje = document.getElementById('CRC_mensaje')
const CRC_turno = document.getElementById('CRC_turno')
// ---
// Creacion de funciones
function dataMsj (){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese apellido");
    contacto = prompt("Ingrese mail o medio de contacto");
    mensaje = prompt("Ingrese su mensaje");
    return new Comunication(nombre,apellido,contacto,mensaje)
}
// ---
// Uso de addEventListener
ERF_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj();
    uno.nave(estacion[0]);
})
ERF_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(estacion[0])
})

ESC_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(estacion[1])
})
ESC_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(estacion[1])
})

SSS_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(estacion[2])
})
SSS_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(estacion[2])
})

FSA_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(estacion[3])
})
FSA_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(estacion[3])
})

CRC_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(estacion[4])
})
CRC_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(estacion[4])
})