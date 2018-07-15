/*
* （1）forEach循环操作中使用break，return时，不会提前退出循环
* （2）利用for in循环对数组进行操作时，输出的顺序没办法保证，同时还会将自定义的属性进行输出，甚至是原型链上面的属性
* （3）for of可以对所有具有迭代器的对象进行遍历，
*     如数组，字符串，set，map，generate以及有些类属数组对象（nodeList，arguments），其没有上诉两种循环方式的弊病。
*     for of 对迭代器进行循环时的退出条件是，done 为true，只要当done为true则不进行后续操作。如generate中的return语句都将不会在执行
* * */
console.log("forEach");
[1,2,3].forEach(function (val,index) {
    console.log(index);
    return;//return将不起作用
});

console.log("for in循环")
var a = [1,2,3];
a.foo = "foo"
for(var val in a){
    console.log(a[val]);
    //return;
}

console.log("for of 循环")
var a = [1,2,3];
a.foo = "foo"
for(var val of a){
    console.log(val);
    //return;
}