var num=+read_line();
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
/*
console.log(minBrick(6,6,4))*/
