/**
 * Created by heshan on 2017/8/2.
 */
/*自动迭代生成10以内的数字，其也是通过闭包的方式实现的*/
/* 自带迭代器的几种数据类型中，默认包含属性symbol.iterator该属性是一个方法，执行后返回另一个方法，如下所示*/
[Symbol.iterator](){
    var index = 0;
    return function next(){
        if(index < 10){
            return {value:index++,done:false};
        }else{
           return {value:undefined,done:true};
        }
    }
}