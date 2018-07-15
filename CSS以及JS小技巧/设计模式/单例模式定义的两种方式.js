/*ES6中的import使用的是单例模式，也即当对同一个文件导入多次时
* import "loader"
* import "loader"
* 上述的import只会执行一次，而不会执行多次的
* */


/*最常见的到单例模式就是对象字面量,该方式定义的实例没有封装性，很容易被外部修改*/
var singleton = {
    name:"jack",
    getName:function(){
        return this.name;
    }
}
var t1 = singleton ;
var t2 = singleton ;
/*那么很显然的， t1 === t2 。*/



/*第二种方法，内部构造函数判断，全局变量instance如果被修改了之后有可能将会回去不到实例对象*/
var instance = null;
function Singleton() {
    if(instance !== null){
        return instance;
    }
    this.name = "jack";
    this.getName = function (){
        return this.name;
    }
}


/*第一种方式 利用闭包的方式实现,在该方法中将构造函数私有化，
只有初次实例化时才会调用构造函数，
在闭包的外面不能直接通过构造函数进行实例化，
同时当实例化一次后 修改实例也不会影响内不私有变量instance，
直接调用getInstance就可以获得实例*/
var Singleton = (function(){
    function singleClass (){/*私有变量，*/
        this.name = "jack";
        this.getName = function(){
            return this.name;
        };
    }
    var instance = null;/*私有变量*/
    return {
        name:"Singleton",
        getInstance:function(){/*静态方法获取实例*/
            if(instance === null){
                return new singleClass();
            }else{
                return instance;
            }
        }
    }
})();

/*利用单例模式可以用于进行JS的懒加载和预加载（此处的懒加载和预加载指的是能力检测中的部分）*/
/*如进行XHR的方式进行ajax请求,第一个是预加载，如果页面中过多需要能力检测的地方最好不要用于加载方式，这样会导致全局变量很多的情形*/
var CreateXHR = (function (){
    function _ieCreateXhr()
    {     // code for IE6, IE5
        return   new ActiveXObject("Microsoft.XMLHTTP");
    }

    function _newCreateXhr()
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }

    if (window.XMLHttpRequest)
    {
        return _newCreateXhr;
    }
    else
    {
        return _ieCreateXhr;
    }
})();

/*懒加载的方式,只有在使用的时候才调用_constructor方法*/

var CreateXHR = function(){
    var _instance = null;

    function _constructor()
    {
        function _ieCreateXhr()
        {
            return   new ActiveXObject("Microsoft.XMLHTTP");
        }

        function _newCreateXhr()
        {
            return new XMLHttpRequest();
        }

        if (window.XMLHttpRequest)
        {
            return _newCreateXhr;
        }
        else
        {
            return _ieCreateXhr;
        }
    }

    return {getInstance: function ()
    {
        if (_instance == null)
        {
            _instance = _constructor();
        }
        return _instance;

    }};
}

/*
var xhrFactoryMethod = CreateXHR.getInstance();
console.log(xhrFactoryMethod());

*/

//单例模式可用于管理变量的命名空间，防止变量命名的污染