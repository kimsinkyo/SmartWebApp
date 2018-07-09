$(document).ready(function(){
    $("button").click(function(){ //버튼 클릭시 좌우로 왕복하는 에니메이션 예제
        $("div").animate({left : '310px'}, 2000, back);
    });
});
function back(){ // 왼쪽을 기준으로 10픽셀의 위치로 2초동안 이동하고 go 함수를 호출하는 함수 
$("div").animate({left : '10px'}, 2000 ,go);

}
function go(){ // 왼쪽을 기준으로 310픽셀의 위치로 2초동안 이동하는 back 함수를 호출하는 함수
    $("div").animate({left : '310px'}, 2000, back);
}