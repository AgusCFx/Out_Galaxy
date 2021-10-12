$(document).ready(function(){
// Objetos que contienn las modificaciones para editar los temas
    let styles = {
        style1: {
            border: "1px solid black",
            color: "black",
            theme: 'body_blind_theme'
        },
        style2: {
            border: "1px solid blue",
            color: "rgb(52, 238, 253)",
            theme: 'body_normal_theme'
        },
        style3: {
            border: "1px solid green",
            color: "Green",
            theme: 'body_hack_theme'
        }
    }

// Funcion para modificar los temas
    function changeBodyTheme(prop){
        // reset a las clases que modifican el tema del body
        $('#body_container').removeClass('body_normal_theme body_blind_theme body_hack_theme').addClass(styles[`${prop}`].theme);

        // modificaciones extras
        let gridUniv = $('.gridUniv');
        let gridUniv__1 = $('.gridUniv__1');
        for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = styles[`${prop}`].border};
        for (let i = 0; i < gridUniv__1.length; i++){ gridUniv__1[i].style.color = styles[`${prop}`].color};

        // guardado preferencia del usuario para mantener el tema al navegar en otros html
        localStorage.setItem("theme", prop)
    }

// Botones para setear tema
    $('#blind_theme').click(function(e){
        e.preventDefault();
        changeBodyTheme("style1");
    })
    
    $('#normal_theme').click(function(e){
        e.preventDefault();
        changeBodyTheme("style2");
    })
    
    $('#hack_theme').click(function(e){
        e.preventDefault();
        changeBodyTheme("style3");
    })

// obtencion de previa preferencia del usuario sobre el tema elegido
    if(localStorage.getItem('theme')){
        let localTheme = localStorage.getItem('theme');
        changeBodyTheme(localTheme)
    } 
});