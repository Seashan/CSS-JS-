var arr = [2,4];
var p = 5;
var x = 10;
var Ni = new Array(x+1).fill(0);
for(var i = 0 ;i<arr.length;i++){
    if(arr[i] <= x){
        Ni[arr[i]] = 1;
    }
}
var dp = new Array(x+1).fill(0);
dp[1] =1;
for(var i = 2; i<=x;i++){
    var tmp = new Array(x+1).fill(0);
    for(var j=1;j<x;j++){
        var num = dp[j];
        if(num!=0){
            if(Ni[j+1] == 1){
                tmp[1] += num;
            }
            if(j+1 <p){
                tmp[j+1] += num;
            }
        }
    }
    dp = tmp;
}
var res = 0;
for(var i = 1;i<x;i++){
    if(dp[i]!=0)
        res += dp[i];
}
console.log(res);