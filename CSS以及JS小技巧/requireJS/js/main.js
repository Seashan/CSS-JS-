/**
 * Created by heshan on 2017/4/21.
 */
/*   require(['js/index'],function(){
 alert("load finished!")
 })/!*使用require加载时异步的不会阻塞页面的加载*!/
 */
require.config({/*主要是用于配置文件的加载的路径，如果没有加载成功也会加载本地的jQuery*/
    paths:{
        "jquery" : ["http://cdn.bootcss.com/jquery/1.11.3/jquery.min"],
        "underscore":'http://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',
        "b":"index",/*一个JS文件就是一个模块*/
       /* 'a':'aa'*//*对于本地的文件在依赖时可以直接在require中进行添加*/
    },/*配置文件的路径时不用加上JS的后缀*/
    shim:{
        "underscore":{/*非标准的AMD库的加载需要配置*/
            exports:"_",
        }
    }
})

require(['jquery','underscore','aa'],function($,_,a){
    $(function(){
        a.fun2();
        /*b.fun1();*//*执行自定义模块*/
        /*  alert("jquery load");*/
        _.each([1,2,3], alert);
    })
})

require(['jquery'],function($){
    $(function(){
        alert("hello")
    })
})
