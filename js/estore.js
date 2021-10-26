    //array carrito
let prevCarrito = [];
    //json
const estoreJSON = "js/ecomerse.json";

$(document).ready(function() {


    
    $.getJSON(estoreJSON, (req, res) => {
        if(res === "success"){
            let infoEstore = req;
            
            $("#filterForm").submit((e)=>{
                e.preventDefault();
                $("#viewEstore").html("");
                let arrayFiltro = [];
                let resFiltro = [];

                $("#checkArmamento").is(":checked") ? arrayFiltro.push($("#checkArmamento:checked").val()) : false ;
                $("#checkPropulsor").is(":checked") ? arrayFiltro.push($("#checkPropulsor:checked").val()) : false ;
                $("#checkEscudo").is(":checked") ? arrayFiltro.push($("#checkEscudo:checked").val()) : false ;
                $("#checkAsistente").is(":checked") ? arrayFiltro.push($("#checkAsistente:checked").val()) : false ;
                for (let i = 0; i < arrayFiltro.length; i++){
                    const response = infoEstore.filter( item => item.type == arrayFiltro[i])
                    for (let i = 0; i < response.length; i++) {
                        resFiltro.push(response[i])
                    }
                }
                for (const part of resFiltro) {
                    $("#viewEstore").append(`<article class="product__tarjet">
                    <div class="product__tarjet__type">${part.type}</div>
                    <div class="product__tarjet__mark">${part.mark}</div>
                    <div class="product__tarjet__model">${part.model}</div>
                    <div class="product__tarjet__info" id="info${part.model}">${part.info}
                    </div>
                    <div class="product__tarjet__img"><img src=${part.img} alt=${part.model}></div>
                    <div class="product__tarjet__price">$¬${part.price}</div>
                    <div class="botonera">   
                        <button id="btnInfo${part.model}">Info</button>
                        <button id="btnBuy${part.model}">Comprar</button>
                    </div>
                    </article>`)

                    $(`#btnInfo${part.model}`).click(() => {
                        $(`#info${part.model}`).toggle();
                    })
                // ---------------------------------------------------
                // seccion para el carrito
                    $(`#btnBuy${part.model}`).click(() => {
                        let subTotal = prevCarrito.filter(c => c.model === part.model).length;
                        if (subTotal == 0) {
                            prevCarrito.push(part);
                            console.log(prevCarrito);
                            $("#viewCarrito").append(`<article class="carrItem" id="carr${part.model}">
                            <div class="carrItemModel">${part.model} ${part.mark} ${part.model} ${part.mark}</div>
                            <div class="carrItemCant${part.model}" id="carrItemCant${part.model}"></div>
                                </div>
                                <button id="sumItem${part.model}">+</button>
                                <button id="resItem${part.model}">-</button>
                                <div class=carrItemPrice>$¬${part.price}</div>
                                </article>`)
                                $(`#carrItemCant${part.model}`).text(subTotal += 1);


                                // Sumar y restar items del carrito
                                $(`#sumItem${part.model}`).click(()=> {
                                    subTotal += 1
                                    $(`#carrItemCant${part.model}`).text(subTotal);
                                    console.log(subTotal);
                                });

                                $(`#resItem${part.model}`).click(()=> {
                                    if (subTotal > 1) {
                                        subTotal -= 1
                                        console.log(subTotal);
                                        $(`#carrItemCant${part.model}`).text(subTotal);
                                        console.log(prevCarrito.model)
                                    }else if (subTotal = 1){
                                        $(`#carr${part.model}`).remove()
                                        subTotal = 0 ;
                                        for (let i = 0; i < prevCarrito.length; i++) {
                                            if (prevCarrito[i].model === part.model) {
                                                prevCarrito.splice(i, 1);
                                            }
                                            
                                        }
                                        console.log(subTotal);
                                        console.log(prevCarrito);

                                    }
                                    
                                })
                            }else {
                                alert("este producto ya fue agregado al carrito");
                            }
                            

                            $("#resetCarrito").click(() => {
                                prevCarrito = [];
                                $("#viewCarrito").html('');
                            })
                    });

                // ---------------------------------------------------
                }
            })
        }
})



})

