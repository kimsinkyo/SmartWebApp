function getLottoNumber(){
    this.number = new Array();
    this.lotteryNumber = new Array();
    this.rank = -1;
    //로또 번호 6개, 1-45 ,중복 불가
    this.generateNumber = function(){
       this.number = this.createArrayNumber(1,45,6);
    }
    //당첨 번호 7개,1-45 ,중복 불가, 마지막 1개는 보너스
    this.generateLotteryNumber = function(){
       this.lotteryNumber = this.createArrayNumber(1,45,7);    
    }
    //로또번호와 당첨번호를 비교 하여 몇 등 인지 결과를 확인
    this.checkRank = function(){
        var count = this.getCount(this.number, this.lotteryNumber);
        if(count == 6){
            this.rank = 1;
        }
        else if(count == 5 && this.contatis(this.number, this.lotteryNumber[this.lotteryNumber.length-1]) == true){
            this.rank = 2;            
        }
        else if(count == 5){
            this.rank = 3; 
        }
        else if(count == 4){
            this.rank = 4; 
        }
        else if(count == 3){
            this.rank = 6; 
        }
        else{
            this.rank = -1;
        }
    }
    this.contatis = function(arr, num){
        for(var i in arr){
            if(arr[i] == num)
            return true;
        }
        return false;
    }
    this.getCount = function(arr1,arr2){
        var count = 0;
        var min = arr1.length > arr2.length ? arr2.length : arr1.length; 
        for(var i = 0; i < min ; i++){
            if(this.contatis(arr1,arr2[i]) == true)
            count++;
        }
        return count;
    }
    this.randomInt = function(min, max){
        if(min > max){
        var tmp = min;
        min = max;
        max = tmp;
        }
        return parseInt(Math.random()*(max-min+1) + min);
    }
    this.createArrayNumber = function(min, max, count){
        var nowCount = 0;
        var res = new Array();
        while(res.length < count){
            var i = 0;
            var tmp = this.randomInt(min,max);
            while(i < res.length){
                if(res[i] == tmp)
                break;
                i++;
            }
            if(i == res.length)
            res.push(tmp);
        }
        return res;
    }
}
var lotto1 = new getLottoNumber();
lotto1.generateNumber();
lotto1.generateLotteryNumber();
console.log("로또 번호 : " + lotto1.number);
console.log("당첨 번호 : " + lotto1.lotteryNumber);
lotto1.checkRank();
switch(lotto1.rank){
    case 1:
    console.log("1등입니다.");
    break;
    case 2:
    console.log("2등입니다.");
    break;
    case 3:
    console.log("3등입니다.");
    break;
    case 4:
    console.log("4등입니다.");
    break;
    case 5:
    console.log("5등입니다.");
    break;
    default:
    console.log("당첨되지 않았습니다.");
}