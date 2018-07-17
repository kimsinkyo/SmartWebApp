$("td").mouseenter(function(){
  var subscript = "<div class=is_hovered><button>구독</button><button>기사보기</button></div>"
  $(this).addClass("is_hovered").append(subscript);
});

$("td").mouseleave(function(){
  $("tr > td").removeClass("is_hovered");
  $("div.is_hovered").remove();
});

function list(){
  $("#news01 li:first").slideUp(function(){
    $(this).appendTo($("#news01")).slideDown();
  });
}
setInterval(function(){list()},4000);

function RTlist(){
  $("#RTWord li:first").slideUp(function(){
    $(this).appendTo($("#RTWord")).slideDown();
  });
}
setInterval(function(){RTlist()},4000);