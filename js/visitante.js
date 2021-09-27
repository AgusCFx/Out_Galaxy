let btnSetNickName = document.getElementById('btnSetNickName');
let setNickName = document.getElementById('setNickName');
let getNickName = document.getElementById('getNickName');
let nickName;
let viewNickName = document.createElement("span");

function nickNameAppendChild(nickName) {
    viewNickName.innerHTML = `<span>${nickName}</span>`;
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