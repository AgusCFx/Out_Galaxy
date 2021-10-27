//json
const estoreJSON = "js/ecomerse.json";
let carrito = [];
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
                        let subCant = carrito.filter(c => c.model === part.model).length;
                        if (subCant == 0) {
                            part.cant = 1
                            part.subTotal = part.price;
                            carrito.push(part);
                            
                            $("#viewCarrito").append(`<article class="carrItem" id="carr${part.model}">
                                <div class="carrItemModel">${part.model} ${part.mark}</div>
                                <div class="carrItemCant${part.model}" id="carrItemCant${part.model}"></div>
                                <div class="btnsModCant">
                                    <button id="sumItem${part.model}">+</button>
                                    <button id="resItem${part.model}">-</button>
                                </div>
                                <div class="carrItemPrice" id="carrItemPrice${part.model}"></div>
                                </article>`)
                                $(`#carrItemCant${part.model}`).text(subCant += 1);
                                $(`#carrItemPrice${part.model}`).text(`$¬${part.subTotal}`);
                                console.log(carrito);

                                // Sumar y restar items del carrito
                                $(`#sumItem${part.model}`).click(()=> {
                                    subCant += 1
                                    $(`#carrItemCant${part.model}`).text(subCant);
                                    let modCant = carrito.find(x => x.model == part.model)
                                    if(modCant){
                                        modCant.cant++
                                    }
                                    let modSubTotal = carrito.find(x => x.model == part.model)
                                    if(modSubTotal){
                                        modSubTotal.subTotal = part.cant * part.price;
                                    }
                                    $(`#carrItemPrice${part.model}`).text(`$¬${part.subTotal}`);
                                    console.log(carrito);
                                });
                                $(`#resItem${part.model}`).click(()=> {
                                    if (subCant > 1) {
                                        subCant -= 1
                                        $(`#carrItemCant${part.model}`).text(subCant);
                                        let modCant = carrito.find(x => x.model == part.model)
                                        if(modCant){
                                            modCant.cant--
                                            console.log(carrito)
                                        }
                                        let modSubTotal = carrito.find(x => x.model == part.model)
                                        if(modSubTotal){
                                            modSubTotal.subTotal = part.cant * part.price;
                                        }
                                        $(`#carrItemPrice${part.model}`).text(`$¬${part.subTotal}`);
                                        console.log(carrito);
                                    }else if (subCant = 1){
                                        $(`#carr${part.model}`).remove()
                                        subCant = 0 ;
                                        for (let i = 0; i < carrito.length; i++) {
                                            if (carrito[i].model === part.model) {
                                                carrito.splice(i, 1);
                                            }
                                        }
                                    }
                                })

                            }else {
                                alert("este producto ya fue agregado al carrito");
                            }
                            
                            $("#resetCarrito").click(() => {
                                carrito = [];
                                $("#viewCarrito").html('');
                            })
                    });

                }
            })
        }
    })
})