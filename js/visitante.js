$(document).ready(function(){
    let nickName;

    function nickNameShow() {
        $('#getNickName').text(nickName); 
    }
    
    if (localStorage.getItem('setNick')) {
        nickName = localStorage.getItem('setNick');
        nickNameShow(nickName);
    }else $('#getNickName').text("NEW USER");

    $('#btnSetNickName').click(function(){
        nickName = $('#setNickName').val();
        nickNameShow(nickName);
        localStorage.setItem('setNick', nickName);
    })
})