
/*  계층 셀렉터
Child : => 부모자식 관계의 요소들을 선택
Descendant : => 조상에 포함된 descendant 요소를 선택
Next Adjacent : => prev 요소의 sibling 관계이고 바로 다음에 위치한 요소를 선택
Next Sibling : => prev 요소의 sibling 관계이며 prev 다음에 나오는 모든요소를 선택
*/

// Child 계층 예제
$("ul > li").css("color", "red");
$("#child > ul >li").css("color", "blue");

// Descendant 계층 예제
$("#descendant ul li").css("color", "green");

// Adjacent 계층 예제
// 아이디가 adjacent이고 자손중에 input 태그가 나온 뒤 다음이 span 태그이면 css를 다음과 같이 적용한다
$("#adjacent input + span").css("font-weight", "700")

// Sibling 계층 예제
// 아이디가 sibling이고 자손중에 div태그가 나오면 같은 레벨의 요소들의 css를 적용한다.
$("#sibling div ~").css("color", "red");