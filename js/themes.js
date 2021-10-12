$(document).ready(function(){
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
    
    function changeBodyTheme(prop){
        $('#body_container').removeClass('body_normal_theme body_blind_theme body_hack_theme').addClass(styles[`${prop}`].theme);
        let gridUniv = $('.gridUniv');
        let gridUniv__1 = $('.gridUniv__1');
        for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = styles[`${prop}`].border};
        for (let i = 0; i < gridUniv__1.length; i++){ gridUniv__1[i].style.color = styles[`${prop}`].color};
        localStorage.setItem("theme", prop)
    }
    
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
    
    if(localStorage.getItem('theme')){
        let localTheme = localStorage.getItem('theme');
        changeBodyTheme(localTheme)
    } 
});