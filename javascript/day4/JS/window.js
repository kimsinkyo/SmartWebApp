
var myWindow;
//윈도우 창을 하나 연다 = 윈도우 객체를 생성한다 
//윈도우 객체를 만들어서 myWindow에 저장
function openWindow(){
    myWindow = window.open("",
    "myWindow",
    "width=300, height=300, toolbar=yes, location=yes, menubar=yes, scrollbar=yes, resizealbe=yes");
}
//윈도우 창을 하나 닫는다 = 저장된 객체가 있으면 윈도우 객체를 닫는다
function closeWindow(){
    if(myWindow)
    myWindow.close();
}

function blurWindow(){
    if(myWindow){
    myWindow.blur();
    }
}

function focusWindow(){
    if(myWindow){
    myWindow.focus();
    }
}

function checkWindow(){
    if(!myWindow){
        alert("한 번도 열린 적 없음");
    }
    else{
        if(myWindow.closed){
            alert("닫혀 있음");
        }
        else{
            alert("열려 있음");
        }
    }
}

function moveByWindow(){
   myWindow.moveBy(150,150);
}

function moveToWindow(){
    myWindow.moveTo(150,150);
}

function resizeByWindow(){
    myWindow.resizeBy(250,250);
 }
 
 function resizeToWindow(){
     myWindow.resizeTo(850,650);
 }