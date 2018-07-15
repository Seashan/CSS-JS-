/**
 * Created by heshan on 2017/8/29.
 */
/*第一个对jQuery类进行扩展*/
jQuery.add = function (a,b){
    return a + b;
}

jQuery.extend({
    add:function(a,b){
        return a + b;
    },
    sub:function(a,b) {
        return a-b;
    }
})

jQuery.plugins = {
   add:function(a,b){
    return a + b;
},
  sub:function(a,b) {
    return a-b;
}
}


/*实例属性的扩展*/
jQuery.fn.add = function (a,b) {
    return a+b;
}
jQuery.fn.extend({
    add:function (a,b) {
        return a+b;
    },
    sub:function (a,b) {
        return a-b;
    }
})
jQuery.fn.attr =function (options) {
    var default1 = {a:1,b:2};
    opt = $.extend({},options,default1);
    /*在做一些逻辑操作*/
}

/*闭包*/
(function ($) {
    var default1 = {};
    $.fn.ownFun = function (options) {
        /*参数处理*/
        options = $.extend({},options,default1);
        /*逻辑处理*/
    }
})(jQuery)