$(document).ready(function(){
    $("#fadeIn").click(function(){ // id가 fadeIn인 요소를 클릭하면 사각형이 페이드 인되는 함수 실행
        $("#div1").fadeIn(); // id가 div1인 요소를 페이드 인
        $("#div2").fadeIn("slow"); // id가 div2인 요소를 천천히 페이드 인
        $("#div3").fadeIn(2000); // id가 div3인 요소를 2초동안 페이드 인
    });
    $("#fadeOut").click(function(){  // id가 fadeOut인 요소를 클릭하면 사각형이 페이드 아웃되는 함수 실행
        $("#div1").fadeOut(); // id가 div1인 요소를 페이드 아웃
        $("#div2").fadeOut("slow"); // id가 div2인 요소를 천천히 페이드 아웃
        $("#div3").fadeOut(2000); // id가 div3인 요소를 2초동안 페이드 아웃
    });
    $("#toggle").click(function(){  // id가 toggle인 요소를 클릭하면 사각형이 페이드 인, 페이드 아웃이 번갈아 가며 실행되는 함수 실행
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(2000);
    });
});