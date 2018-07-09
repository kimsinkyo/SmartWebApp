$(document).ready(function(){
    $("button").click(function(){ // 체이닝 기법을 이용하여 버튼을 누르면 2초동안 위로 슬라이드, 2초동안 아래로 슬라이드한다 
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
