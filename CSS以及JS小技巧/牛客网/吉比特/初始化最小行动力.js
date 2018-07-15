const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length==(parseInt(inputArr[0].split(" ")[0])+1))
    {
        var m = +inputArr[0].split(" ")[0];
        var n = +inputArr[0].split(" ")[1];
        var arr = new Array(m);
        for(var i=0 ;i < m ;i++){
            var inp = inputArr[i+1].split(" ");
            arr[i] = new Array();
            for(var j = 0;j<n;j++){
                arr[i].push(+inp[j]);
            }
        }
        var min = minAction(arr);
        console.log(min);
        inputArr = [];
    }

});

function minAction(dungeon) {
    var m = dungeon.length;
    var n = dungeon[0].length;
    var dp = new Array(m);
    for (var i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    for (i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) dp[i][j] = Math.max(1, 1 - dungeon[i][j]);
            else if (i == m - 1) {
                dp[i][j] = Math.max(1, dp[i][j + 1] - dungeon[i][j]);
            }
            else if (j == n - 1) {
                dp[i][j] = Math.max(1, dp[i + 1][j] - dungeon[i][j]);
            }
            else {
                var val = Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j];
                dp[i][j] = Math.max(1, val);
            }
        }
    }
    return dp[0][0];
};