/*
    append() : 위치를 기준으로 내용을 마지막에 추가
    appendTo() : 해당 위치 마지막에 내용을 추가
    prepend() :위치의 기준으로 내용을 처음에 추가
    prependTo() : 해당 위치의 처음에 내용을 추가
    text() : 텍스트 컨텐츠를 가져온다
    after() : 뒤에 내용을 추가
    before() : 앞에 내용을 추가
    insertAfter() : 내용을 다음 위치에 추가
    insertBefore() : 내용을 이전 위치에 추가
    wrap() : 하나의 부모 요소 생성
    wrapAll() : 입력한 다수의 요소를 감싸는 부모 요소 생성 
    unwrap() : 부모 요소 제거
    detach() : 요소를 삭제
    renove() : 요소 및 관련 이벤트 삭제
    empty() : 요소의 모든 자식을 삭제
    clone() : 복사
    replaceAll() : 입력받은 요소를 교체 
*/ 


//btn1버튼을 클릭하면 inner클래스가 있는 요소 마지막에 <br><b>추가 테스트</b><br>를 추가
$("#btn1").click(function(){
    $(".container .inner").append("<br><b>추가 테스트</b><br>");
});
// <br><b>추가 테스트</b><br>를 container클래스가 있는 요소의 마지막에 추가 
$("<br><b>추가 테스트</b><br>").appendTo(".container");
// inner 클래스를 포함하는 요소들 중에 첫번째 요소 앞에 추가
$(".container .inner").first().prepend("Prepend 테스트 <br>");

// append와 prepend는 위치안에 자식요소로 들어가지만 before와 after는 인접요소로 들어간다
$(".container2 .inner").last().before("<button>Before</button>")
$(".container2 .inner").last().after("<button>After</button>")

$(".container3 .inner").click(function(){
    $(".container3 .inner").after("<div style = 'border : 1px solid black; text-align : center; margin: 10px 0; height:100px'>apple</div>");
});