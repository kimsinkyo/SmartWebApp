$(document).ready(function(){
    $("#hide").click(function(){ // id가 hide인 요소을 클릭하면 1초에 걸쳐 p태그를 안보이게 하는 함수 
        $("p").hide(1000);
    });
    $("#show").click(function(){ // id가 show인 요소을 클릭하면 1초에 걸쳐 p태그를 보이게 하는 함수
        $("p").show(1000);
    });
    $("#toggle").click(function(){ // id가 toggle인 요소을 클릭하면 p태그가 보이면 안보이게 하고 안보이면 보이게하는 함수 
        $("p").toggle(1000);
    });    
});