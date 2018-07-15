
var num=+read_line();/*指定该组数据的输入测试数据的组数*/
while(num){
    var line1 = readLine().split(" ");
    var n = +line1[0];
    var m = +line1[1];
    var a = +line1[2];
    var res = minBirck(n,m,a);
    print(res);
    num--;
}

function minBrick(n,m,a) {
    return Math.ceil(n/a) * Math.ceil(m/a);
}