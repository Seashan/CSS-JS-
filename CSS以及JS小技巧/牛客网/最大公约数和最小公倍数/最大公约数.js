/**
 * Created by heshan on 2017/5/23.
 */
/**
 * Created by heshan on 2017/5/23.
 */
var nbrOfLaps = function (x, y) {
    if(x>=y)
    {
        if(x%y===0) return x;
        else return find(x,y)
    }
    else {
        if(y%x===0) return y;
        else  return find(y,x)
    }
}
function find(a,b){
    let result=1
    let n=b;
    while(n>1)
    {
        if(a%n===0&&b%n===0)
        {
            result*=n;
            a=a/n;
            b=b/n;
        }
        n--;
    }
    return result;
}

/*方法二*/
function maxDivsion(num1,num2){
    var max = num1>num2 ? num1 : num2;
    var min = num1 > num2 ? num2 : num1;
    for(var i = min ;i>0 ;i --){
        if(max % i ==0 && min % i ===0){
            return i;
        }
    }
}

console.log(nbrOfLaps(24,16));