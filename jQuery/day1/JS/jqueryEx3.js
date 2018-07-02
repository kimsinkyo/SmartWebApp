/*
속성 셀렉터
[name |= "value"] : value와 동일하거나 value 뒤에 -가 붙는 단어로 시작하는 속성을 가진 요소를 선택
[name *= "value"] : value를 포함하고 있는 값을 가진 요소를 선택
[name ~= "value"] : value를 단어로 포함한 값을 가진 요소를 선택
[name $= "value"] : value로 끝나는 값을 가진 요소를 선택
[name = "value"] : value와 일치하는 값을 가진 요소를 선택
[name != "value"] : value와 일치하지 않는 값을 가진 요소를 선택
[name ^= "value"] : value로 시작하는 값을 가진 요소를 선택
[name = "value1"][name = "value2"] : 다중 조건을 체크하는 요소를 선택
*/ 

// [name |= "value"] 예제 
// 아이디가 orAttr이고 자손중에 input 태그의 이름이 inputName이거나 inputName-으로 되어있는 요소들의 value를 ORTEST로 설정한다.
$("#orAttr input[name |= 'inputName']").val("ORTEST");

// [name *= "value"] 예제 
// 아이디가 mulAttr이고 자손중에 input 태그의 이름 중 inputName이라는 문자가 포함된 모든 요소의 value를 ANDTEST로 설정한다.
$("#mulAttr input[name *= 'inputName']").val("ANDTEST");

// [name ~= "value"] 예제 
// 아이디가 waveAttr이고 자손중에 input 태그의 이름 중 inputName이라는 단어가 포함된 모든 요소의 value를 ~TEST로 설정한다.
$("#waveAttr input[name ~= 'inputName']").val("~TEST");

// [name != "value"] 예제 
// 아이디가 notAttr이고 자손중에 input 태그의 이름 중 inputName이 아닌 단어가 포함된 모든 요소의 value를 NOTTEST로 설정한다.
$("#notAttr input[name != 'inputName']").val("NOTTEST");

// [name $= "value"] 예제 
// 아이디가 endAttr이고 자손중에 input 태그의 이름이 inputName으로 끝나는 모든 요소의 value를 ENDTEST로 설정한다.
$("#endAttr input[name $= 'inputName']").val("ENDTEST");

// [name ^= "value"] 예제 
// 아이디가 beginAttr이고 자손중에 input 태그의 이름이 inputName으로 시작하는 모든 요소의 value를 BEGINTEST로 설정한다.
$("#beginAttr input[name ^= 'inputName']").val("BEGINTEST");

// 다중 속성 예제 
// 아이디가 idAttr이고 input태그의 자손중에 id에 test라는 단어가 포함된 모든 요소의 value를 IDTEST로 설정한다.
$("#idAttr input[id = 'test7']").val("IDTEST");