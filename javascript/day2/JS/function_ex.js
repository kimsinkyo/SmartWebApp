
/*var num1 = prompt("첫번째 숫자를 입력하세요.");
num1 = parseFloat(num1);
var num2 = prompt("두번째 숫자를 입력하세요.");
num2 = parseFloat(num2);
var op = prompt("연산자를 입력하세요.");

var res = (num1+ op + num2 + '=' + arith1(num1,num2,op) + "\n");
res += (num1+ op + num2 + '=' + arith2(num1,num2,op) + "\n");
alert(res);

function arith1(){
switch(op){
    case '+':
    return res = num1 + num2;
    case '-':
    return res = num1 - num2;
    case '*':
    return res = num1 * num2;
    case '/':
    return res = num1 / num2;
    case '%':
    return res = num1 % num2;
    default:
    return 0; 
  }
}

function arith2(num1,num2,op){
    switch(op){
        case '+':  return add(num1,num2);
        case '-':  return min(num1,num2);
        case '*':  return mul(num1,num2);
        case '/':  return sub(num1,num2);
        case '%':  return mod(num1,num2);
        default:   return 0; 
    }
}
function add(num1,num2){return num1 + num2}
function min(num1,num2){return num1 - num2}
function mul(num1,num2){return num1 * num2}
function sub(num1,num2){return num1 / num2}
function mod(num1,num2){return num1 % num2}
*/
//최대공약수 함수 
/*
var n1 = prompt("첫번째 숫자를 입력하세요.");
n1 = parseFloat(n1);
var n2 = prompt("두번째 숫자를 입력하세요.");
n2 = parseFloat(n2);

function maxDiv(n1,n2){
    var i;
    var nDiv;
    for(i = 1; i <= n1; i++){
        if(n1 % i == 0 && n2 % i == 0){
            nDiv = i;
        }
    }
    return nDiv;
}
alert("n1 과 n2의 최대공약수는 : " + maxDiv(n1,n2));
*/
/*
//최소 공배수
var n3 = prompt("첫번째 숫자를 입력하세요.");
n3 = parseFloat(n3);
var n4 = prompt("두번째 숫자를 입력하세요.");
n4 = parseFloat(n4);

function minDiv(n3,n4){
    var i;
    for(i = n3; i <= (n3*n4); i += n3){
        if(i % n4 == 0){
            return i;       
        }
    }
}
alert("n3, n4의 최소공배수는 : " + minDiv(n3,n4));
*/
//배열의 약수 구하는 예제
/*
var number = prompt("숫자를 입력하세요.");
function divArr(number){
    var i;
    var dArr = new Array();
    var tmp = "";
    for(i = 1; i <= number; i++){
        if(number % i == 0){
        tmp += i + ","; 
        dArr = tmp;
    }
    }
    return dArr;
}
console.log("숫자 " + number + "의 약수는 : " + divArr(number));
alert("숫자 " + number + "의 약수는 : " + divArr(number));
function divArr(number){
    var i;
    var dArr = new Array();
    var tmp = "";
    for(i = 1; i <= number; i++){
        if(number % i == 0){
            dArr.push(i);
    }
    }
    return dArr;
}

var res = divArr(number);

function divArrsum(res){
    var sum = 0;
    for(index in res){
        sum += res[index];
    }
    return sum;
}

console.log("숫자 " + number + "의 약수의 합은 : " + divArrsum(res));
alert("숫자 " + number + "의 약수의 합은 : " + divArrsum(res));
*/

//성적 등급 함수
/* 
var testNum = prompt("시험 점수를 입력하세요.");
alert("당신의 학점은 " + getGrade(testNum) + " 입니다.");

function getGrade(testNum){
      
    if( testNum >= 90 && testNum <= 100){
         return 'A';
    } 
    else if(testNum >= 80 && testNum < 90){
        return 'B';
    }
    else if(testNum >= 70 && testNum < 80){
        return 'C';
    }
    else if(testNum >= 60 && testNum < 70){
        return 'D';
    }
    else if(testNum < 60){
        return 'F';
    }
    else{
        return "입력오류";
    }       
}
*/
// 서로소의 판별
/*
var div1 = prompt("첫번째 숫자를 입력하세요.");
div1 = parseFloat(div1);
var div2 = prompt("두번째 숫자를 입력하세요.");
div2 = parseFloat(div2);

alert(div1 + ", " + div2 + "은 " + isCoprime(div1,div2));

function isCoprime(div1,div2){
    if(maxDiv(div1,div2) == 1)
        return true;
    else
        return false;
}
*/
//로또 번호
function getLotto(){
var lotto = new Array(6);
var count = 0;
var overlap = true;

while(count < 6){
    var i;
    var rNumber;
    rNumber = parseInt(Math.random()*45)+1;
    
    for(i = 0; i < count; i++){
        if(lotto[i] == rNumber){
            overlap = false;
        }
        }
    if(overlap){
        lotto[count] = rNumber;
        count++;
        }
        overlap = true;  
    }
    return(lotto[0]+','+lotto[1]+','+lotto[2]+','+lotto[3]+','+lotto[4]+','+lotto[5]); 
}
console.log(getLotto());
alert("이번 주 로또 번호는 : " + getLotto());

