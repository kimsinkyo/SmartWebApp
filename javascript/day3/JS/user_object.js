function Student(name,grade,clas,number){
    this.name = name;
    this.grade = grade;
    this.class = clas;
    this.number = number;
    this.toString = function(){
        return new String("이름 : " + this.name + ", 학년 : " + this.grade + ", 반 : " + this.class + ", 번호 : " + this.number
        );
    }
}

var std1 = new Student("홍길동",1,1,1);
console.log(std1.toString());

var std2 = new Student("임꺽정",1,1,1);
console.log(std2.toString());

std2.sayHello = function(){
    return "Hello";
}
console.log(std2.sayHello());

Student.prototype.sayHi = function(){
    return "Hi";
}
console.log(std2.sayHi());

var res = new Array();
var ts = std2.toString(); 
var subts = ts.split(', '); 
for(var i in subts){
    var tmp = subts[i].split(':');
    res.push(tmp[0]);
}
console.log(res.join('and '));

var res1 = new Array();
res1.push(std2.name);
res1.push(std2.grade);
res1.push(std2.class);
res1.push(std2.number);
console.log(res1.join(' and '));
