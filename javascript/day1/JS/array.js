var array1 = [123, "123", true];
var array2 = new Array();
array2[4] = "123";
var array3 = new Array(10);
var array4 = new Array(123, "123", true); 

console.log("array1 : " + array1);
console.log("array1 type : " + typeof array1[0] + " " + typeof array1[1] + " " + typeof array1[2]);

console.log("array2 : " + array2);
console.log("array3 : " + array3);
console.log("array4 : " + array4);
console.log("array4 type : " + typeof array4[0] + " " + typeof array4[1] + " " + typeof array4[2]);

var array5 = ["Hello","World"];
var array6 = array5.concat(array1);
console.log("array6 : "+ array6);

array6.push(1234);
console.log("array6 : "+ array6);

var tmp = array6.pop();
console.log("array6.pop() : "+ tmp);
console.log("array6 : "+ array6);

tmp = array6.shift();
console.log("array6.shift() : "+ tmp);
console.log("array6 : "+ array6);

var len = array6.unshift(tmp);
console.log("array6.unshift() : "+ len);
console.log("array6 : "+ array6);

console.log("array6.join() : " + array6.join(" and "));

array6.splice(0,1,"Hi");
console.log("array6.splice() : "+ array6);

var array7 = array6.slice(3);
console.log("array7 : "+ array7);

array7.reverse();
console.log("array7.reverse() : "+ array7);

var array8 = array6.sort();
console.log("array6.sort() : "+ array8);

console.log("1 == \'1\' : " + (1 == '1'));
console.log("1 === \'1\' : " + (1 === '1'));

console.log("1 == \'1\' : " + (1 !== '1'));
console.log("1 === \'1\' : " + (1 === 1));



