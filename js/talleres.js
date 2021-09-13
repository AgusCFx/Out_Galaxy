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
        alert('si funcoina')
        setTimeout(() => {
            alert('Gracias ' + this.nombre + ' ' + this.apellido + ', su mensaje fue recibido por ' + param)
        }, 3000);    
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
// const botonERF = document.getElementById('ERF_mensaje')
// const botonERF = document.getElementById('ERF_mensaje')
// const botonERF = document.getElementById('ERF_mensaje')

ERF_mensaje.addEventListener('click', ()=>{
    let uno = dataMsj();
    uno.nave(ERF);
})

ERF_turno.addEventListener('click', ()=>{
    let uno = dataMsj()
    uno.setTurno(ERF)
})