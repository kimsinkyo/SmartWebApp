// en 태그 요소에 title 정보를 가져와서 변수 title에 저장
var title = $("em").attr("title");
//id가 test인 요소에 텍스트를 출력
$("#test").text("Attr: "+title);
//prop("프로퍼티") : 해당 프로퍼티의 값을 가져옴
//prop("프로퍼티", 값) : 해당 프로퍼티가 있다면 기존값을 덮어쓰고 없다면 프로퍼티를 생성하고 해당하는 값으로 초기화 
// id가 p인 요소에 number라는 프로퍼티(멤버변수)를 생성하고 1234라는 값을 저장
$("#p").prop("number",1234);
// 위에서 생성한 프로퍼티 넘버를 id가 div1인 요소에 텍스트로 출력 
$("#div1").text("Property : " + $("#p").prop("number"));
// id가 p인 요소에 number라는 프로퍼티(멤버변수)를 제거
$("#p").removeProp("number");
// 제거된 프로퍼티를 출력하는 명령이므로 undefined가 출력된다
$("#div2").text("Property : " + $("#p").prop("number"));

//id가 btn1인 버튼을 클릭하면 다음 함수를 실행한다
$("#btn1").click(function(){
    //input태그에 있는 값을 가져와서 TEST A를 추가하여 text라는 변수에 저장한다
    var text = "TEST A " + $("input").val();
   //text에 저장된 문자열을 input태그에 출력
    $("input").val(text);
});

//id가 btn2인 버튼을 클릭하면 다음 함수를 실행한다
$("#btn2").click(function(){
    //input태그의 값을 비운다
    $("input").val("");
});