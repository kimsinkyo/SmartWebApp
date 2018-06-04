
//리터럴 문법
var obj1 = {'kitty':100};
printObj(obj1);
obj1['doggy'] = 90;
printObj(obj1);
obj1.jj = 80;
printObj(obj1);

//오브젝트
var obj2 = new Object();
obj2['kitty'] = 90;
obj2.doggy = 40;
printObj(obj2);
console.log("obj1 type : " + typeof obj1);
console.log("obj2 type : " + typeof obj2);

delete(obj2.doggy);
printObj(obj2);

var std = {
    name:"Tim", 
    age:20, 
    sayHello : function(){
        return "이름 : " + this.name + ", 나이 : " + this.age; 
    } 
};
console.log(std.sayHello());
std.sayHello2 = function(country){
    return this.sayHello() + ", 국적 : " + country;
};
console.log(std.sayHello2('United States'));


