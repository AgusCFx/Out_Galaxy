const talleresJSON =  "js/estaciones.json";

$(document).ready(function(){


    $("#selectTaller").change(function(){
        $("#showTaller").slideDown("fast");
        let setTaller = $("#selectTaller").val();

        $.getJSON(talleresJSON, (request, response) => {
            if(response === "success"){

                let infoEstacion = request;
                $("#showEstacion, #showServicios, #showRequisitos").html("");
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
        
    })
})