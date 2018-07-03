
$(".filter > div").eq(0).addClass("red");
$(".filter > div").eq(1).addClass("orange");
$(".filter > div").eq(2).addClass("yellow");
$(".filter > div").eq(3).addClass("green");
$(".filter > div").eq(4).addClass("blue");
$(".filter > div").eq(5).addClass("darkblue");
$(".filter > div").eq(6).addClass("purple");

$(".filter > div").bind("click", function(){
    if($(this).is(".filter>div:eq(0)")){
      $(".filter > div").css("color", "white");
    }
    else if($(this).is(".filter>div:eq(6)")){
      $(".filter > div").css("border", "dotted black");
    }
    else if($(this).is(".filter>div:eq(1)")){
      $(".filter > div").not(":eq(1)").css("font-weight", "bold");
    }
    else if($(this).is(".filter>div:eq(5)")){
      $(".filter > div").slice(0,5).css("border", "solid black", "2px");
    }
});
