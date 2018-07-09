$("tbody > tr").on('click', function(){
    $(".red").addClass("font-red");
    $("tbody > tr").not(this).removeClass("font-red");

    $(".blue").addClass("font-blue");
    $("tbody > tr").not(this).removeClass("font-blue");

    $(".gold").addClass("font-gold");
    $("tbody > tr").not(this).removeClass("font-gold");
});
