const talleresJSON =  "js/estaciones.json";

$(document).ready(function(){
    $("#formContact").hide();

// FUNCIONES
    // Funcion para ver el taller selecionado
    function showInfoTaller() {
        let setTaller = $("#selectTaller").val();

        // obtenemos informacion del JSON según el valor seleccionado por el usuario
        $.getJSON(talleresJSON, (request, response) => {
            if(response === "success"){
                let infoEstacion = request;
                for (const iterator of infoEstacion) {
                    if (iterator.id == setTaller) {
                        $("#showEstacion").text(iterator.estacion);
                        for (let i = 0; i < iterator.servicios.length; i++) {
                            $("#showServicios").append(`<li>${iterator.servicios[i]}</li>`);
                        }
                        for (let i = 0; i < iterator.requisitos.length; i++) {
                            $("#showRequisitos").append(`<li>${iterator.requisitos[i]}</li>`) 
                        }
                        $("#showImagenes").attr("src", iterator.imagenes);
                        $("#showImagenesSource").attr("src", iterator.imagenesSource);
                    } 
                }
            }
        })
    }
    // Funcion para comunicarse con la nave y enviar la informacion recibida
    function showFormMensaje() {
        let setTaller = $("#selectTaller").val();
        $.getJSON(talleresJSON, (request, response) => {
            if(response === "success"){
                let infoEstacion = request;
                for (const iterator of infoEstacion) {
                    if (iterator.id == setTaller) {
                        $("#formContacto__estacion").text(iterator.estacion);

                        // Aqui se continuará en Backend, (la idea es chat soporte en vivo, lo hecho hasta ahora es un formulario rapido).
                    } 
                }
            }
        })
    }

// Select para elegir taller
    $("#selectTaller").change(function(){
        $("#formContact").hide(400);
        $("#showTaller").hide(400, ()=>{
            $("#showEstacion, #showServicios, #showRequisitos").html("");
            showInfoTaller()
        });
        $("#showTaller").show(400);
    })
// Boton para comunicarse con taller 
    $("#makeMensaje").click(()=>{
        $("#formContact").show(400);
        showFormMensaje()
    })
// Boton temporalmente sin funcionalidad que servirá para contactar al chat en vivo (falta aprender backend)
    $("#formContact__Submit").click((e)=>{
        e.preventDefault();
    })
})