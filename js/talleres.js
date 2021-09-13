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

const ESC_mensaje = document.getElementById('ESC_mensaje')
const ESC_turno = document.getElementById('ESC_turno')

const SSS_mensaje = document.getElementById('SSS_mensaje')
const SSS_turno = document.getElementById('SSS_turno')

const FSA_mensaje = document.getElementById('FSA_mensaje')
const FSA_turno = document.getElementById('FSA_turno')

const CRC_mensaje = document.getElementById('CRC_mensaje')
const CRC_turno = document.getElementById('CRC_turno')


ERF_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj();
    uno.nave(ERF);
})
ERF_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(ERF)
})

ESC_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(ESC)
})
ESC_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(ESC)
})

SSS_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(SSS)
})
SSS_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(SSS)
})

FSA_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(FSA)
})
FSA_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(FSA)
})

CRC_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.nave(CRC)
})
CRC_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(CRC)
})