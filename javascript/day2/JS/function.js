//함수 선언식
console.log("add1() : " + add1(10, 20));

function add1(num1 , num2){
    return num1 + num2;
}

//함수 표현식

var add2 = function(num1,num2){
    return num1 + num2;
}
console.log("add2() : " + add2(10, 20));

// 리턴 없는 함수 선언식
function add3(num1, num2){
    var result = num1 + num2
    console.log("add3() : " + result);
}
add3(10,20);

// 가변인자함수
console.log("add1(1,2,3) : " + add1(1,2,3));
console.log("add1(1) : " + add1(1));

function add4(){
    if(arguments.length == 1)
        return arguments[0];
    else if(arguments.length == 0)
        return 0;
    else{
        var result = 0;
        for(var index in arguments)
        result += arguments[index];
    }
                return result;
}
console.log("add4() : " + add4(1,2,3,4));