let body_theme = document.getElementById('body_container');
let gridUniv = document.getElementsByClassName('gridUniv');
let gridUniv__1 = document.getElementsByClassName('gridUniv__1');

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
        body_theme.classList.remove('body_normal_theme');
        body_theme.classList.remove('body_hack_theme');
        body_theme.classList.remove('body_blind_theme');
        for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = styles[`${prop}`].border};
        for (let i = 0; i < gridUniv__1.length; i++){ gridUniv__1[i].style.color = styles[`${prop}`].color};
        body_theme.classList.add(styles[`${prop}`].theme);
        localStorage.setItem("theme", prop)
}

let blind_theme = document.getElementById('blind_theme').addEventListener('click', (e) => {
    e.preventDefault();
    changeBodyTheme("style1");
    // localStorage.setItem("theme", "style1")
})

let normal_theme = document.getElementById('normal_theme').addEventListener('click', (e) => {
    e.preventDefault();
    changeBodyTheme("style2");
    // localStorage.setItem("theme", "style2")
})

let hack_theme = document.getElementById('hack_theme').addEventListener('click', (e) => {
    e.preventDefault();
    changeBodyTheme("style3")
    // localStorage.setItem("theme", "style3")
})

if(localStorage.getItem('theme')){
    let localTheme = localStorage.getItem('theme');
    changeBodyTheme(localTheme)
}