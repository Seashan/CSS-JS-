var line1;
while(line1 = read_line()){
    line1 = line1.split(" ");
    var n = parseInt(line1[0]);
    var m = parseInt(line1[1]);
    var line2 = read_line().split(" ");
    var a = parseInt(line2[0]);
    var b = parseInt(line2[1]);
    var c = parseInt(line2[2]);
    var d = parseInt(line2[3]);
    var line3= read_line().split(" ");
    var x = parseInt(line3[0]);
    var y = parseInt(line3[1]);
    var z = parseInt(line3[2]);
    var money = maxMoney(n,m,a,b,c,d,x,y,z);
    print(money);
}
function maxMoney(n,m,a,b,c,d,x,y,z){
    var white = y / c;
    var color = z / d;

    var money = 0;
    if(x > white * b + color * a){
        var count = Math.min(parseInt(m / b), parseInt(n / a));
        money += count * x;
        m -= count * b;
        n -= count * a;
        money += parseInt(m/ c) * y;
        money += parseInt(n / d) * z;
    }
    else{
        money += parseInt(m / c) * y;
        money += parseInt(n / d) * z;
        m = m % c;
        n = n % d;
        var count = Math.min(parseInt(m / b), parseInt(n / a))
        money += count * x;
    }
    return money;

}