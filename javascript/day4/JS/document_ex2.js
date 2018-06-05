var createC;

function createComponent(tag,value){
    if(!createC){
    var header = document.createElement(tag);
    header.setAttribute('id','text1')
    var text = document.createTextNode(value);
    header.appendChild(text);
    document.body.appendChild(header);
    createC = true;
    document.getElementById('btn1').value = '삭제';
     } 
    else{
        var header = document.getElementById('text1');
        document.body.removeChild(header);
        createC = false; 
        document.getElementById('btn1').value = '생성';
    }
    
}  