
$(".filter > div").eq(2).addClass("gold");
$(".filter > div").first().css("background", "green");
$(".filter > div").last().css("background", "red");

$(".filter > div").slice(3,5).css("font-weight", "bold");
$(".filter > div").not(":eq(2)").css("border", "dotted");
$(".filter > div").bind("click", function(){
    if($(this).is(".filter>div:eq(2)")){
      $(this).css("color", "red");
    }
});
