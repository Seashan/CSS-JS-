/**
 * Created by heshan on 2017/5/23.
 */
/*辗转相除法相当于利用*/
function gcb(x,y){
    if(y==0) return x;
    else return gcb(y,x%y);
}
function minAndMax(x,y){

    var max=x>=y?gcb(x,y):gcb(y,x);
    var min=x*y/max
    return "最小公倍数："+min+"\n最大公约数："+max;
}
console.log(minAndMax(15,25));