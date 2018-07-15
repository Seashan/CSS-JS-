/**
 * Created by heshan on 2017/8/27.
 */
/*读取的内容比较少时则直接利用read_line（）方法即可*/
var line1=read_line() ;
var n = parseInt(line1.split(" ")[0]);
var m= parseInt(line1.split(" ")[1]);
/*在读取比较长的字符串时，调用readline方法，防止字符串的长度超过1024*/
var arr = readLine();
var max = maxProfit(n,m,arr.split(" "));
print(max);


function maxProfit(n,m,arr){
    arr.sort(function (a,b) {
        return parseInt(a) - parseInt(b);
    })
    var profit =0;
    var sale = 0;
    var i = m > n ?  m -n :0;
    for(;i < m;i++){
        if(profit < parseInt(arr[i]) * (m-i)){
            profit = parseInt(arr[i]) * (m-i)
            sale = parseInt(arr[i]);
        }
    }
    return sale;
}

function readLine() {
    var line = "";
    var next = read_line();
    while(next.length >= 1024) {
        line += next;
        next = read_line();
    }
    line += next;
    return line;
}