let btnSetNickName = document.getElementById('btnSetNickName');
let setNickName = document.getElementById('setNickName');
let nickName;

btnSetNickName.addEventListener('click', (e) => {
    e.preventDefault();
    nickName = setNickName.value;
    console.log(nickName);
})

// let btnSetNickName = document.getElementById('btnSetNickName');
// let setNickName = document.getElementById('setNickName');
// let user = {
//     nickname: '',
//     age: '',
//     galaxy: ''
// };
// btnSetNickName.addEventListener('click', (e) => {
//     e.preventDefault();
//     user.nickname = setNickName.value;
//     console.log(nickName)
// })
// localStorage.setItem('user', JSON.stringify(user))
// localStorage.getItem('user', JSON.parse(user))