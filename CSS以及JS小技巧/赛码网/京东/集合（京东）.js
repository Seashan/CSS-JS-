/*多组数据输入：
* 多组（不超过 5 组）数据。
 每组输入数据分为三行，第一行有两个数字 n,m($0＜n,m\leq10000$)，分别表示集合 A 和集合 B 的元素个数。
 后两行分别表示集合 A 和集合 B。每个元素为不超出 int 范围的整数，每个元素之间有一个空格隔开。
*1 2
 1
 2 3
 1 2
 1
 1 2
*
* */


/*输入的模板
* 一个测试样例有多组输入输出，故需要利用循环进行输入，
* 同样除了对于集合个数的输入用简单的read_line外，集合成员均用readLine()函数进行
* */
var line1 ;
while(line1 = read_line() ){
    var a = + line1.split(" ")[0];
    var b = + line1.split(" ")[1];
    var line2 = readLine().split(" ");
    var line3 = readLine().split(" ");
    var res = union(a,b,line2,line3);
    print(res.join(" "));
}

function union(a,b,setA,setB){
    if(a > b){
        for(var i =0;i< b;i++){
            if(setA.indexOf(setB[i]) < 0){
                setA.push(setB[i]);
            }
        }
        return setA.sort(function (a,b) {
            return parseInt(a) - parseInt(b);
        });
    }
    else{
        for(var i =0;i< a;i++){
            if(setB.indexOf(setA[i]) < 0){
                setB.push(setA[i]);
            }
        }
        return setB.sort(function (a,b) {
            return parseInt(a) - parseInt(b);
        });
    }

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
/*
var res = union(6 ,9,[6 ,15, 23, 34, 35, 43], [9, 12, 13, 27, 28, 33, 40, 44, 49])
console.log(res)*/
