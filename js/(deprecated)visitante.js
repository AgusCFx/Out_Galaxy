let userName = prompt("Bienvenido, por favor ingrese su nombre:\n(no más de 10 caracteres)");
let catchUserNameLS = 


while(userName == '' || userName.length > 10){
        if(userName.length > 10){
            userName = prompt("Querido ¿que parte de no más de 10 caracteres no se entiende? \nIngresá un NOMBRE DE 10 CARACTERES O MENOS")
        } else {
            userName = prompt("Por favor solo ingrese un nombre:\n(no más de 10 caracteres)")
        }
}










// const untexto = ` <div class="gridUniv__1">
// <p>Mantenimiento y reparación de propulsores y calculadores de espacio tiempo (con RTO al día), recarga de escudos de materia oscura con Sintraxium 9000 y Firinolio de azúcar.</p>
// </div>`
// const gungang = `<div class="gridUniv__1">
// <p>Mantenimiento y reparación de propulsores y calculadores de espacio tiempo (con RTO al día), recarga de escudos de materia oscura con Sintraxium 9000 y Firinolio de azúcar.</p>
// </div>`


// const otrogungan = {
//     titulo: 'asdfasdfasdf',
//     titulo2: 'faaa re locoooo'
// }
// const boton = document.getElementById('inicio')
// boton.addEventListener('click', ()=>{
//     const superdiv = createElement(div)
//     superdiv.innerHTML = `
//     <main>
//     <h1>Propulsores, calculadores de espacio tiempo y escudos de materia oscura</h1>
//     <section>
//         <article class="gridUniv">
//            ${untexto}
//             <div class="gridUniv__2">
//                 <picture>
//                     <source srcset="img/nave1-FM.jpg" media="(max-width:600px)">
//                     <img src="img/nave1.jpg" alt="Nave en mantenimiento">
//                 </picture>
//             </div>
//         </article>
//         <article class="gridUniv">
//             <div class="gridUniv__1">
//                 <p>Venta, colocación y recarga de armamento fijo o de seguimiento, y selección exclusiva para escuadrones bajo regímenes específicos (armamentos de fuerza superior a los 125Mkills no disponible para venta al publico, guiño guiño).</p>
//             </div>
//             <div class="gridUniv__2">
//                 <picture>
//                     <source srcset="img/nave2-FM.jpg" media="(max-width:600px)">
//                     <img src="img/nave2.jpg" alt="Nave con armamento">                    
//                 </picture>
//             </div>
//         </article>
//         <article class="gridUniv">
//             <div class="gridUniv__1">
//                 <p>Tuning de calidad superior y pintura anti-corrosión meteorolitimistica que le da un toque de frescura al pana.</p>
//             </div>
//             <div class="gridUniv__2">
//                 <picture>
//                     <source srcset="img/nave3-FM.jpg" media="(max-width:600px)">
//                     <img src="img/nave3.jpg" alt="Nave tuning">
//                 </picture>
//             </div>
//         </article>
//     </section>
// </main>
//     `
//     document.body.appendChild(superdiv)
})
