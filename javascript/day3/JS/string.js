var str = new String('Hello World!');
console.log(str);
console.log("str length : " + str.length);

//한 글자 확인
console.log("str[0] : " + str[0]);
console.log("str.chatAt(1) : " + str.charAt(1));

//모든 문자를 대문자로
console.log("str.toUppercase : " + str.toUpperCase());

//모든 문자를 소문자로
console.log("str.toLowercase : " + str.toLowerCase());

//문자열 찾기
console.log("str.indexOf(\'wo\') : " + str.indexOf('Wo'));
console.log("str.indexOf(\'wo\') : " + str.indexOf('ab'));
console.log("str.indexOf(\'wo\',7) : " + str.indexOf('Wo',7));

var str2 = new String("abcdefgabcdabcdacbacba");
//ab가 들어가 있는 모든 위치를 출력하세요
console.log(str2);
console.log("str2 length : " + str2.length);
var str3 = new String("ab");
var index = 0;
function indexOfs(str2,str3){
    var index = 0;
    var arr = new Array();
    while(true){
    index = str2.indexOf(str3,index);
    if(index == -1)
        break;
    arr.push(index); 
    index = index + str3.length;
    }
    return arr;
}
var res = indexOfs(str2,str3);
console.log(res.join(", "));
 
//lastIndexOf 
console.log("str2.lastndexOf(str3) : " + str2.lastIndexOf(str3));

//search 
console.log("str2.search(str3) : " + str2.search(str3));

//substr
console.log("str2.substr(0,5) : " + str2.substr(1,5));

//substring
console.log("str2.substring(1,5) : " + str2.substring(1,5));

//slice
console.log("str2.slice(1,5) : " + str2.slice(1,5));
console.log("str2.substring(1,-1) : " + str2.substring(1,-1));
console.log("str2.slice(1,-1) : " + str2.slice(1,-1));

//split
var str4 = "2018.06.04";
var str5 = str4.split('.');
var year = str5[0];
var month = str5[1];
var day = str5[2];
console.log(str4 + " : " + year + "년 " + month + "월 " + day + "일 ");
