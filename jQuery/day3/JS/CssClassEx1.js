$("tbody > tr").on('click', function(){ // tbody의 자손중에 tr을 클릭하면
    $(this).addClass("font-red"); //클릭한 요소에 font-red라는 클래스를 추가한다
    $("tbody > tr").not(this).removeClass("font-red"); // 클릭한 것 이외의 요소에서 font-red클래스를 제거한다
    
   if($(this).find("input").is(":checked")){ //내가 선택한 요소에 input이라는 태그가 있는지 확인한 후 input태그가 있고 체크가 되어있으면
        $(this).find("input").prop("checked", false); // 현재 input요소의 체크 값을 false로 만든다
        $(this).css("background", "none");      // 현재 tr요소의 배경을 없앤다
   }
   else{  // 체크가 되어있지 않으면
        $(this).find("input").prop("checked", true) // 현재 input요소의 체크 값을 true로 만든다
        $(this).css("background-color", "gold");   // 현재 tr요소의 배경을 금색으로 만든다
   }
});


