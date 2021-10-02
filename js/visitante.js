// Terminar de Pasar a JQuery y modificar el removechild por un innerHTML'' en JQuery

$(()=>{
    let btnSetNickName = $('#btnSetNickName');
    let setNickName = $('#setNickName');
    let getNickName = $('#getNickName');
    let nickName;
    let viewNickName = $("#span");
    
    function nickNameAppendChild(nN) {
        viewNickName.innerHTML = `<span>${nN}</span>`;
        getNickName.appendChild(viewNickName);
    }
    
    if (localStorage.getItem("localNickName")) {
        let getLocalNickName = localStorage.getItem('localNickName');
        nickName = JSON.parse(getLocalNickName);
        nickNameAppendChild(nickName);
    };
    
    btnSetNickName.addEventListener('click', (e) => {
        e.preventDefault();
        getNickName.removeChild(viewNickName);
        nickName = setNickName.value;
        localStorage.setItem('localNickName', JSON.stringify(nickName));
        nickNameAppendChild(nickName);
    })

})