/*
탐색 예제
*/

// $().children() : 해당 객체의 자식요소들을 선택
$("li .level-3").children().css("background-color","yellow");

// ul 태그안에 클래스가 level-2이고 해당 객체와 가장 가까운 상위 li 태그의 css를 수정한다.
$("ul.level-2").closest("li").css("font-weight","bold");

// level-1의 하위 클래스 중에 item-3-3-3의 조건을 만족하는 찾아서 해당 요소의 css를 수정한다
$(".level-1").find(".item-3-3-3").css("color","blue");

// 클래스가 item-4-1인 요소 다음 요소의 css를 찾고 해당 요소의 css를 수정한다.
// next()는 다움 하나만 nextAll()은 전부 다 해당된다
$(".item-4-1").next().css("background-color", "gray")

// 클래스가 item-4-1인 요소의 부모 요소 하나를 찾음(바로 위) 
// parent() :  바로 상위에  위치하는 부모 , parents() : 모든 부모 
$(".item-4-1").parent().css("color", "red");