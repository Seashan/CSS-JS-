function fun(x) {
    if(x==1){
        return 1;
    }
    var dp = [];
    dp[0] = [1];
    for(var i = 1;i<x+1;i++){
        dp[i] = new Array(i+1).fill(1);
        for(var j = 1;j<i;j++){
            dp[i][j] = dp[i-1][j]+dp[i-1][j-1];
            if(dp[i][j]==x){
                return i+1;
            }
        }
        dp[i][j] = dp[i-1][j-1];
        if(dp[i][j]==x){
            return i+1;
        }
    }
    return ;
}
