var i = 1;

while(i <= 10){
    console.log(" i : " + i);
    i++;
}

for(i = 1; i <= 10; i++){
    console.log(" i : " + i);
}

var i = 1;
var sum = 0;
while(i <= 10){
    sum += i;  
    i++;
}
console.log(" 합계는 : " + sum);

var i = 11;
var sum = 0;
do{
    console.log(" i : " + i);
    sum += i; 
    i++;
}while(i <= 10){
    console.log(" 합계는 : " + sum);
}

