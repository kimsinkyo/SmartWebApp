$("td").mouseenter(function(){
  var subscript = "<div class=is_hovered><button>구독</button><button>기사보기</button></div>"
  $(this).addClass("is_hovered").append(subscript);
});

$("td").mouseleave(function(){
  $("tr > td").removeClass("is_hovered");
  $("div.is_hovered").remove();
});

// 실시간 검색어 J쿼리문
function list(){
  $("#news01 li:first").slideUp(function(){
    $(this).appendTo($("#news01")).slideDown();
  });
}
setInterval(function(){list()},4000);

// 실시간 검색어 팝업
$(document).ready(function(){
  
  $("#RTWord").hover(function(){
  $(".search-hover").toggleClass('display-block');
});
  $("#auto-icon").click(function(){
    $(".sub-menu").toggleClass('display-block');
    $(".up").toggleClass('display-none');
    $(".down").toggleClass('display-none');
  });
  $("#sort-icon").click(function(){  
    $(".sort-sub-menu").toggleClass('display-none');
    $(".sort-yn").toggleClass('display-none',)
    $(".sort-up").toggleClass('display-none');
    $(".sort-down").toggleClass('display-none');
    $(".nav-menu").toggleClass('display-none');
    $(".container-fluid").toggleClass('background-black');
  });
  $("#sort-icon2").click(function(){  
    $(".sort-sub-menu").toggleClass('display-none');
    $(".sort-yn").toggleClass('display-none')
    $(".sort-up").toggleClass('display-none');
    $(".sort-down").toggleClass('display-none');
    $(".nav-menu").toggleClass('display-none');
    $(".container-fluid").toggleClass('background-black');
  });
  $(".nav-close").click(function(){  
    $(".sort-sub-menu").toggleClass('display-none');
    $(".sort-yn").toggleClass('display-none')
    $(".sort-up").toggleClass('display-none');
    $(".sort-down").toggleClass('display-none');
    $(".nav-menu").toggleClass('display-none');
    $(".container-fluid").toggleClass('background-black');
  });
});

// 쥬니어네이버 색 변화
$(document).ready(function(){
  $(".junior_naver").hover(function(){
    $("#blue_ju").toggleClass('blue');
    $("#orange_ni").toggleClass('orange');
    $("#red_uh").toggleClass('red');
    $("#naver_green").toggleClass('green');
  });
});

// 해피빈 색 변화
$(document).ready(function(){
  $(".happy_bean").hover(function(){
    $("#happy").toggleClass('happy');
    $("#bean").toggleClass('bean');
  });
});
// 뉴스 J쿼리문
function RTlist(){
  $("#RTWord li:first").slideUp(function(){
    $(this).appendTo($("#RTWord")).slideDown();
  });
}
setInterval(function(){RTlist()},4000);

var index = 0;

$("#next").click(function(){
    index = (index+1)%6;

    $("#etcContents div").eq(index).removeClass('display-none');
    $("#etcContents div").eq(index).addClass('display-block');

    $("#etcContents div").not($("#etcContents div").eq(index)).removeClass('display-block');
    $("#etcContents div").not($("#etcContents div").eq(index)).addClass('display-none');
});

$("#prev").click(function(){
  
  index = (index-1)%6;
  if(index == -1){
    index = 4;
  }
  $("#etcContents div").eq(index).removeClass('display-none');
  $("#etcContents div").eq(index).addClass('display-block');

  $("#etcContents div").not($("#etcContents div").eq(index)).removeClass('display-block');
  $("#etcContents div").not($("#etcContents div").eq(index)).addClass('display-none');
});