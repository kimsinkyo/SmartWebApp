// var elementCount = $(".font-red").find("*").prevObject.length;
// console.log(elementCount);

// $("#div").css("border","2px solid blue");
// $("span").css("border","2px dotted green");

// $(".font-red").css("color", "red");

/*  필터 셀렉터
:animated => 에니메이션이 적용된 요소들만 선택
:focus  => 현재 활성화 된 요소들만 선택
:header  => h태그가 적용된 요소들만 선택
:lang()  => 특정언어를 가진 요소들만 선택
:not()  => 괄호안의 셀렉터와 반대되는 요소들만 선택
:root  => document의 루트 요소 선택(html)
:even  => 짝수 요소 선택
:odd   => 홀수 요소 선택
:first  => 첫번째 요소 선택
:last  => 마지막 요소 선택
:eq()  => n번째 요소 선택
:lt()  => n번째 요소보다 작은 인덱스를 가진 모든 요소 선택
:gt()  => n번째 요소보다 큰 인덱스를 가진 모든 요소 선택
*/
// animated 필터 예제
// id가 run인 요소를 클릭하면 
$("#run").click(function(){
    // div 태그 요소들 중에서 에니메이션이 적용된 요소들을 선택하여 colored 클래스가 적용되어 있으면 해제하고, 적용되어 있지 않으면 적용한다.
    $("div:animated").toggleClass("colored");
});

function animatedIt(){
    // id가 mover인 요소에 slow 에니메이션을 적용하고, 에니메이션이 끝나면 animatedIt을 호출한다.
    $("#mover").slideToggle("slow", animatedIt);
}
animatedIt();

// focus 필터 예제
//id가 contents인 요소의 모든 하위요소 중에서 focus blur이벤트가 발생하면 함수를 실행한다.
$("#contents").delegate("*", "focus blur", function(){
    // 이벤트가 발생된 객체의 정보를 element에 저장한다
    var element = $(this);
    // 함수가 0초뒤에 실행되도록 setTimeout 함수에 등록한다
    setTimeout(function(){
        // 객체에 focused 클래스가 있으면 제거, 없으면 추가하는데 객체가 focus된 상태이면
        element.toggleClass("focused", element.is(":focus"));
    },0);
});

// header 필터 예제
// id가 header인 요소 중에서 header 태그에 css를 수정한다
$("#header :header").css({background:'#ccc', color:"blue"});

// lang() 필터 예제
// 언어가 en-us이면 usa 클래스를 추가해주고 en-es이면 spain클래스를 추가해준다
$("#lang div:lang(en-us)").addClass("usa");
$("#lang div:lang(en-es)").addClass("spain");