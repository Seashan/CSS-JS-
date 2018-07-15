/*
对于一个测试样例一组数据单个输出的情况不需要用while进行包裹
读取的内容比较少时则直接利用read_line（）方法即可*/
var line1=read_line();
var n = parseInt(line1.split(" ")[0]);
var m= parseInt(line1.split(" ")[1]);
/*在读取非个数的数据时，调用readline方法，防止字符串的长度超过1024*/
var str = readLine();
/*处理好输入后直接调用函数，利用print进行输出*/
/*
 var res =fun(m,n,arr)
 print(参数)
* */



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
