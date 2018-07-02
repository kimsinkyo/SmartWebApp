$("#form-input").delegate("input", "focus blur", function(){ 
    var element = $(this);
    setTimeout(function(){
        element.toggleClass("focused", element.is(":focus"));
    },0);
});



