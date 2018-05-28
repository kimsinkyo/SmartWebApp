var num1 = prompt("첫번 째 숫자를 입력하세요.");
var op = prompt("연산자를 입력하세요.");
var num2 = prompt("두번 째 숫자를 입력하세요.");
switch(op){
    case '+':
      result = 1*num1 + 1*num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num1 / num2;
    break;
    case '%':
    result = num1 % num2;
    break;
    default:
    console.log("연산자를 잘못 입력 하였습니다.");
    break;
}
console.log(num1 + op + num2 + "=" + result);
alert(num1 +" "+ op + " "+ num2 + "=" + " " + result);