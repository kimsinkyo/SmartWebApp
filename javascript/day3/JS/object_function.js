function printObj(obj1){
    console.log("객체 정보 확인");
    for(var items in obj1){
        console.log("obj[" + items + "] : " + obj1[items]);
        }
    }