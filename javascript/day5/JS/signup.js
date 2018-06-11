var formtag = document.getElementById('formtag');
formtag.onsubmit = function(){
    
    var id = document.getElementById('id').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdcheck').value;
    var year = document.getElementById('birth').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    var phone = document.getElementById('phone').value;
    var max = maxDay(month);
   
    var info_id = document.getElementById('info_id');
    var info_pwd = document.getElementById('info_pwd'); 
    var infoPwdConfirm = document.getElementById('infoPwdConfirm'); 
    var infoBirth = document.getElementById('infoBirth');
    var info_cert = document.getElementById('info_cert');

    
    info_id.style.display = 'none';
    info_pwd.style.display = 'none';
    infoPwdConfirm.style.display = 'none';
    infoBirth.style.display = 'none';
    info_cert.style.display = 'none';

    
    var isOk = true;
    var idRegex = /^[a-zA-Z]\w{4,9}/;
    var pwdRegex = /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;
    var phoneRegex = /^010\d{8}$/;
   
    //id의 길이가 0이면
    if(id.length == 0 || !idRegex.test(id)){
        info_id.style.display = 'block';
        isOk = false;
    }
    if(pwd.length == 0 || !pwdRegex.test(pwd)){
        info_pwd.style.display = 'block';
        isOk = false;
    }
    if(pwd != pwdConfirm){
        infoPwdConfirm.style.display = 'block';
        isOk = false;
    }
    if(phone.length == 0 || !phoneRegex.test(phone)){
        info_cert.style.display = 'block';
        isOk = false;
    }
    if(year.length != 4){
        infoBirth.style.display = 'block';
        infoBirth.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요";
        isOk = false;
    }
    else if(isNaN(parseInt(month))){
        infoBirth.innerHTML = "태어난 달을 선택하세요";
        infoBirth.style.display = 'block';
        isOk = false;
    }
    else if(isNaN(day) || day < 1 || day > max){
        infoBirth.innerHTML = "태어난 날짜(2자리)를 입력하세요";
        infoBirth.style.display = 'block';
        isOk = false;
    }
    if(!isOk){
        return false;
    }
    alert("회원가입에 성공하였습니다. 메인 페이지로 이동합니다.");
}

function maxDay(month){
    switch(month){
        case '1': case'3': case '5': case'7': case '8': case'10': case'12':
        return 31;
        case '2':
        return 28;
        default:
        return 30;
    }
}