var count = 1;
function sayHello(){
    console.log("Callback : Hello!!");
    count++;
}
setTimeout(sayHello, 2000);
console.log("Callback method!!");

// 변수의 렉시컬 환경예제
var tmp = 20;
function lexcicalTest(){
    console.log(" tmp : " + tmp);
    var tmp = 10;
    console.log(" tmp : " + tmp);
}
lexcicalTest();

// 내부 함수 예제
function outter(){
    console.log("outter()!");
    function inner(){
        console.log("outter() : inner()!");
    }
    inner();
}
function inner(){
    console.log("inner()!");
}
outter();
inner();

//클로저 예제
function outter1(){
    var count = 1;
    return function(){
        console.log("count : " + count);
        count++;
    }
}
var closer = outter1();
closer();
closer();
closer();

// 내장함수 eval예제 
function add1(num1 , num2){
    return num1 + num2;
} 

eval("var evalNum1=10, evalNum2=20" );
console.log(add1(evalNum1, evalNum2));

// 내장함수 parseInt(), parsefloat()
var parseNum1 = parseInt("123");
console.log("parseInt = 123 : " + parseNum1);
parseNum1 = parseInt("12!3");
console.log("parseInt = 12!3 : " + parseNum1);
parseNum1 = parseInt("?123");
console.log("parseInt = ?123 : " + parseNum1);

var parseNum2 = parseFloat("123");
console.log("parseFloat(123) : " + parseNum2);
parseNum2 = parseFloat("123.4");
console.log("parseFloat(123.4) : " + parseNum2);
parseNum2 = parseFloat("123,4");
console.log("parseFloat(123,4) : " + parseNum2);
parseNum2 = parseFloat("1e3");
console.log("parseFloat(1e3) : " + parseNum2);
parseNum2 = parseFloat("123.4.5");
console.log("parseFloat(123.4.5) : " + parseNum2);

//내장함수 number 예제
var number = Number("123");
console.log("Number(123) : " + number);
number = Number("12?3");
console.log("Number(12?3) : " + number);
number = Number("12.3");
console.log("Number(12.3) : " + number);
number = Number("1e3");
console.log("Number(1e3) : " + number);
number = Number("0xf");
console.log("Number(0xf) : " + number);
number = Number(010);
console.log("Number(010) : " + number);

//내장함수 String() 예제
var str = String(123);
console.log("String(123) : " + str);
str = String(12.3);
console.log("String(12.3) : " + str);
str = String(12,3);
console.log("String(12,3) : " + str);
str = String(true);
console.log("String(123) : " + str);

//내장 함수 encodeURLIncomponent()/decodeURLIncomponent() 예제
var url = encodeURIComponent("https://www.naver.com");
console.log("encodeURIComponent(https://www.naver.com) : " + url);
console.log("decodeURIComponent("+url+") : " + decodeURIComponent(url));


