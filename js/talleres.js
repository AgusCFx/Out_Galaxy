// Variables temporales
// NOTA: Enviar las siguientes variables a un JSON cuando aprenda AJAX y transformarlos en array de objetos para identificar por separado cada etiqueta.

let ERF = `<article class="gridUniv">
<div class="gridUniv__1">
    <h2>Estacion Rober Frontend</h2>
        <h3>Servicios</h3>
            <ul>
                <li>Pioridad para milicia integrante de las fuerzas de Frontend y aliados</li>
                <li>Venta / Reparacion / Instalacion</li>
            </ul>
        <h3>Requisitos</h3>
            <ul>
                <li>Cualquier arma a la vista de la nave principal debe ser claramente desactivado/guardado a la vista, en caso de armas fijas avise antes por comunicador Watsategram</li>
            </ul>
            <div class="botonera">
                <input type="button" id="ERF_mensaje" value="Mensaje">
                <input type="button" id="ERF_turno" value="Reservar Turno">
            </div>
</div>
<div class="gridUniv__2">
    <picture>
        <source srcset="img/estacion_rober_frontend-FM.jpg" media="(max-width:600px)">
        <img src="img/estacion_rober_frontend.jpg" alt="Rober Frontend">
    </picture>
</div>
</article>`;
let ESC = `<article class="gridUniv">
<div class="gridUniv__1">
    <h2>Estacion Shusha-craft</h2>
        <h3>Servicios</h3>
            <ul>
                <li>Servicios especificos para cazarecompensas</li>
                <li>Compra/Venta partes usadas</li>
            </ul>
        <h3>Requisitos</h3>
            <ul>
                <li>Solo con registro de la ciudad leal de Artofrotch, quien no presente el mismo será ejecutado, o regresado a sus padres segun el caso lo amerite</li>
                <li>Prohibido el uso de tecnologia reaudiano dentro de las instalaciones, si usted no quiere enfermarse nosotros menos</li>
            </ul>
            <div class="botonera">
                <input type="button" id="ESC_mensaje" value="Mensaje">
                <input type="button" id="ESC_turno" value="Reservar Turno">
            </div>
</div>
<div class="gridUniv__2">
    <picture>
        <source srcset="img/estacion_shusha-craft-FM.jpg" media="(max-width:600px)">
        <img src="img/estacion_shusha-craft.jpg" alt="Shusha-craft">
    </picture>
</div>
</article>`;
let SSS = `<article class="gridUniv">
<div class="gridUniv__1">
    <h2>Super System32 servicios</h2>
        <h3>Servicios</h3>
            <ul>
                <li>Restauracion / Venta / Colocacion</li>
                <li>Atencion en horario de purga global</li>
            </ul>
        <h3>Requisitos</h3>
            <ul>
                <li>En horario de Purga Global realizar aviso al menos 5 fuxminutos antes, quien se acerque a menos de 200 fuxmetros de la sucursal sin aviso será sacrificado</li>
                <li>En horario de Purga Global necesario presentarse con bandera blanca de rendicion y prestamo de servicio De Fran Dreslicar sobre el transporte con el cual se presentará, no genere conflictos, ya los generará después.</li>
            </ul>
            <div class="botonera">
                <input type="button" id="SSS_mensaje" value="Mensaje">
                <input type="button" id="SSS_turno" value="Reservar Turno">
            </div>
</div>
<div class="gridUniv__2">
    <picture>
        <source srcset="img/super_system32_servicios-FM.jpg" media="(max-width:600px)">
        <img src="img/super_system32_servicios.jpg" alt="Super System32">
    </picture>
</div>
</article>`;
let FSA = `<article class="gridUniv">
<div class="gridUniv__1">
    <h2>Fireport Sociedad Anonima</h2>
        <h3>Servicios</h3>
            <ul>
                <li>Servicios especificos para cazarecompensas</li>
            </ul>
        <h3>Requisitos</h3>
            <ul>
                <li>Aviso previo, atencion por turnos agendados</li>
            </ul>
            <div class="botonera">
                <input type="button" id="FSA_mensaje" value="Mensaje">
                <input type="button" id="FSA_turno" value="Reservar Turno">
            </div>
</div>
<div class="gridUniv__2">
    <picture>
        <source srcset="img/fireport_sa-FM.jpg" media="(max-width:600px)">
        <img src="img/fireport_sa.jpg" alt="Fireport S.A.">
    </picture>
    <picture>
        <source srcset="img/fireport_sa_2-FM.jpg" media="(max-width:600px)">
        <img src="img/fireport_sa_2.jpg" alt="Fireport S.A. 2">
    </picture>
</div>
</article>`;
let CRC = `<article class="gridUniv">
<div class="gridUniv__1">
    <h2>Cryo Rex Corp</h2>
        <h3>Servicios</h3>
            <ul>
                <li>Compra/Venta de partes usadas</li>
                <li>Alineacion y balanceo de propulsores</li>
            </ul>
        <h3>Requisitos</h3>
            <ul>
                <li>No aceptamos seres humanoides de mas de 5 brazos</li>
            </ul>
            <div class="botonera">
                <input type="button" id="CRC_mensaje" value="Mensaje">
                <input type="button" id="CRC_turno" value="Reservar Turno">
            </div>
</div>
<div class="gridUniv__2">
    <picture>
        <source srcset="img/cryo_rex_corp-FM.jpg" media="(max-width:600px)">
        <img src="img/cryo_rex_corp.jpg" alt="Cryo Rex Corp">
    </picture>
</div>
</article>`;

// Funcion en jQuery para ver el taller seleccionado en el <select>

$(document).ready(function(){
    $("#showTaller").html(ERF);
    
    $("#selectTaller").change(function(){
        let setTaller = $("#selectTaller").val();
            switch (setTaller) {
                case "ERF":
                    $("#showTaller").html(ERF);
                    break;
                case "ESC":
                    $("#showTaller").html(ESC);
                    break;
                case "SSS":
                    $("#showTaller").html(SSS);
                    break;
                case "FSA":
                    $("#showTaller").html(FSA);
                    break;
                case "CRC":
                    $("#showTaller").html(CRC);
                    break
            }
    });
})