/**
 * Created by heshan on 2017/4/21.
 */
define('aa',['jquery','b'],function($,b){
    function fun2(){
      b.fun1();
    }
    return {fun2:fun2};
})