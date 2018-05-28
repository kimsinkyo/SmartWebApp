var num = 197;
var i = 1;
var y = 0;

for(i = 1; i <= num; i++){
    if(num % i == 0){
        y++;
    }    
    if(y == 2){
    console.log( i + " 는 소수입니다.");
    }
   
}

var arr = [100,200,300];
var sum = 0;
for(items in arr){
    sum += arr[items];
}
console.log(arr.join(" + ") + " = " + sum);

var arr2 = {A:10, B:20, C:30};
for(items in arr2){
    console.log("key : " + items + " , value : " + arr2[items]);
}
inner:
for(i = 1; i < 10; i++){
    if(i == 3)
        break inner;
}
console.log(i);


var j = 0;
for(i = 1; i < 10; i++){
    outter1:
    for(j=1; j<4; j++){
        inner1:
        if(j==2){
        console.log("i : " + i + ", j : " + j);
        break inner1;
        }
        if(i==5){
            console.log("i : " + i + ", j : " + j);
            break outter1;
        }
    }
}

var num1 = 8;
var num2 = 12;
var num_a;

for(i = 1; i <= num1; i++){
    if(num1 % i && num2 % i == 0){
        num_a = i;
    }
}
console.log("num1 : " + num1 + " 과 " + "num2 : " + num2 + " 의 최대공약수는 : " + num_a);

var num3 = 15;
var num4 = 10;
var num_b;

for(i = num3; i <= (num3*num4); i += num3){
    if(i % num4 == 0){
        num_b = i;
        break;
    }
}
console.log("num3 : " + num3 + " 과 " + "num4 : " + num4 + " 의 최소공배수는 : " + num_b);

var cnt = 10;
var emp = "";
for(i = 1; i <= cnt; i++){
    
    for(j = 1; j <= cnt-i; j++){
        emp += " ";
       
    }
    for(j=1; j <= (2*i)-1; j++){
        emp += "*";
    }
    console.log(emp);
    emp="";
}
