var number1 = 10;

console.log("number1 = " + number1);

if( number1 % 2 == 0){
    console.log("number1은 짝수입니다.");
}
else{
    console.log("number1은 홀수입니다.");
}

var id = prompt("아이디를 입력하세요.");
if(id == "green"){
    var password = prompt("비밀번호를 입력하세요.")
    if(password = "green"){
        alert("로그인을 성공했습니다.")
    }
    else{
        alert("패스워드를 잘못 입력 하였습니다.")
    }
}
else{
    alert("아이디를 잘못 입력 하였습니다.")

}