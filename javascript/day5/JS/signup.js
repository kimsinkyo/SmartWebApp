var formtag = document.getElementById('formtag');
formtag.onsubmit = function(){
    
    var id = document.getElementById('id').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdcheck').value;
    var year = document.getElementById('birth').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    var phone = document.getElementById('phone').value;

    var isOk = true;
   
    //id의 길이가 0이면
   
    if(!checkVaildID(id)){
        isOk = false;
    }
    if(!checkVaildPWD(pwd)){
        isOk = false;
    }
    if(!checkVaildPwdConfirm(pwdcheck)){
        isOk = false;
    }
    if(!checkVaildPhone(phone)){
        isOk = false;
    }
    if(!checkVaildBirth()){
        isOk = false;
    }
    if(!isOk){
        return false;
    }
    alert("회원가입에 성공하였습니다. 메인 페이지로 이동합니다.");
}

// 아이디 유효성 검사
function checkVaildID(id){
    var idRegex = /^[a-zA-Z]\w{4,9}$/;
    var info_id = document.getElementById('info_id');
    info_id.style.display = 'none';
    if(id.length == 0 || !idRegex.test(id)){
        info_id.style.display = 'block';
        return false;
    }
    return true;
}
//패스워드 유효성 검사
function checkVaildPWD(pwd){
    var pwdRegex = /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;
    var info_pwd = document.getElementById('info_pwd'); 
    info_pwd.style.display = 'none';
    if(pwd.length == 0 || !pwdRegex.test(pwd)){
        info_pwd.style.display = 'block';
        return false;
    }
    return true;
}
// 패스워드 체크 유효성 검사
function checkVaildPwdConfirm(pwdcheck){
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdcheck').value;
    infoPwdConfirm.style.display = 'none';
    if(pwd != pwdConfirm){
        infoPwdConfirm.style.display = 'block';
        return false;
    }
    return true;
}

// 년도, 달, 날짜 유효성 검사
function checkVaildBirth(){
    var year = document.getElementById('birth').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    var infoBirth = document.getElementById('infoBirth');
    infoBirth.style.display = 'none';
    var max = maxDay(month);
    if(year.length != 4){
        infoBirth.style.display = 'block';
        infoBirth.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요";
       return false;
    }
    if(isNaN(parseInt(month))){
        infoBirth.innerHTML = "태어난 달을 선택하세요";;
        infoBirth.style.display = 'block';
       return false;
    }
    if(isNaN(day) || day < 1 || day > max){
        infoBirth.innerHTML = "태어난 날짜를 입력하세요";
        infoBirth.style.display = 'block';
       return false;
    }
    return true;
}

//휴대전화 유효성 검사
function checkVaildPhone(phone){
    var phoneRegex = /^010\d{8}$/;
    var info_cert = document.getElementById('info_cert');
    info_cert.style.display = 'none';
    if(phone.length == 0 || !phoneRegex.test(phone)){
        info_cert.style.display = 'block';
        return false;
    }
    return true;
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