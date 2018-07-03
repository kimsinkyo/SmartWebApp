/*  
    addClass("클래스") : 클래스를 추가
    removeClass("클래스") : 클래스를 제거
    toggleClass("클래스") : 클래스가 있으면 제거 없으면 추가
    hasClass("클래스") : 클래스의 존재여부 판별 있으면 true, 없으면 false
*/

$("#box1").click(function(){
    $(this).addClass("addBC");
});

$("#box2").click(function(){  
    $(this).removeClass("border");
});

$("#box3").click(function(){  
    if(!$("#box3").hasClass("addBC")){
    $(this).addClass("addBC");
    }
});

$("#box4").click(function(){  
    $(this).toggleClass("addBC");
});