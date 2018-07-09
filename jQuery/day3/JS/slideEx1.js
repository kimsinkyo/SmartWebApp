
$(document).ready(function(){
    $("#btn").mouseenter(function(){
        $("#hideText").slideDown("slow");
    });
    $("#btn").mouseleave(function(){
        $("#hideText").css("display", "none");
    });
    $("input").keypress(function(e){
        $("span").text(e.which);
    });        
});
function ascToChar(asc){
    switch(asc){
        case 65: return 'A';
        case 66: return 'B';
        case 67: return 'C';
        case 68: return 'D';
        case 69: return 'E';
        case 70: return 'F';
        case 71: return 'G';
        case 72: return 'H';
        case 73: return 'I';
        case 74: return 'J';
        default: return '기타';
    }
}