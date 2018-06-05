//id를 이용해 Element를 검색해서 스타일을 수정하는 예제
var h1 = document.getElementById('hid');
h1.style.color = "red";
h1.style.fontSize = "20px";
h1.style.fontWeight = '100';

//class를 이용해 Element를 검색해서 스타일을 수정하는 예제
function fontColorChange(){
var h2 = document.getElementsByClassName('hclass');
    h2[0].style.color = "gold";
    h2[0].style.fontSize = "40px";
    h2[0].style.fontWeight = '300';
    h2[1].style.color = "blue";
    h2[1].style.fontSize = "40px";
    h2[1].style.fontWeight = '300';
}

var h3 = document.querySelector('.hclass');
h3.style.fontSize = '100px';

var h3 = document.querySelectorAll('.hclass');
h3[1].style.fontSize = '100px';

document.write("Hello World!");
