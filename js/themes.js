let body_theme = document.getElementById('body_container');
let gridUniv = document.getElementsByClassName('gridUniv');
let gridUniv__1 = document.getElementsByClassName('gridUniv__1');

function changeBodyTheme(theme){
        body_theme.classList.remove('body_normal_theme');
        body_theme.classList.remove('body_hack_theme');
        body_theme.classList.remove('body_blind_theme');
        body_theme.classList.add(theme);
}

let blind_theme = document.getElementById('blind_theme').addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = "1px solid black"};
    for (let i = 0; i < gridUniv__1.length; i++){ gridUniv__1[i].style.color = "black"};
    changeBodyTheme('body_blind_theme')
})

let normal_theme = document.getElementById('normal_theme').addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = "0px"}; 
    for (let i = 0; i < gridUniv__1.length; i++){ gridUniv__1[i].style.color = "rgb(52, 238, 253)"};
    changeBodyTheme('body_normal_theme')
})

let hack_theme = document.getElementById('hack_theme').addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < gridUniv.length; i++){ gridUniv[i].style.border = "1px solid green"}; 
    changeBodyTheme('body_hack_theme')
})
