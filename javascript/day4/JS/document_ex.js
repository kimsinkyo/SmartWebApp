function setColorById(id,color){
    document.getElementById(id).style.color = color;
}

function setColorByClassName(className,color){
    var h3 = document.getElementsByClassName('textbasic');
    for(var i = 0; i < h3.length; i++){
        h3[i].style.color = color;
    }
}

function setButton(className){
    var btn = document.getElementsByClassName(className);
    for(var i = 0; i < btn.length; i++){
        btn[i].style.border = 'none';
        btn[i].style.fontWeight = '700';
        btn[i].style.color = 'white';
    }
}

function setButtonBC(className,backgroundColor){
    var btn = document.getElementsByClassName(className);
    for(var i = 0; i < btn.length; i++){
        btn[i].style.backgroundColor = backgroundColor;
        }
}
setButton('button1');
setButtonBC('buttonBlue','blue');
setButtonBC('buttonRed','red');
setButtonBC('buttonGold','gold');
setButtonBC('buttonBlack','black');





