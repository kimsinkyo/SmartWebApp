
$("select").on("change", function(){ //셀렉트 태그의 값이 변하면 함수를 실행한다
    var selectValue = $(this).val(); // 변수 selectValue에 현재 셀렉트 태그의 값을 저장
    $("#output").val(selectValue); // id가 #output인 요소에 변수의 값을 저장
    if(selectValue == 1){   // 변수의 값이 1이면
        $("#output").prop("readonly", false); //id가 #output인 요소의 속성 readonly를 false로 설정  
        $("#output").val("");   // id가 #output인 요소의 값을 공백으로 한다
    }
    else{
        $("#output").prop("readonly", true); //id가 #output인 요소의 속성 readonly를 true로 설정     
    }
});
