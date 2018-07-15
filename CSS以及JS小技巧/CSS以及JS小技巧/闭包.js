/**
 * Created by heshan on 2017/9/6.
 */
 var value = "window";
function say() {
     console.log(value);
     console.log(this.value);
}
var obj1 = (function(){
    var value = "1-1";
    return{
        value:"1-2",
        say:function () {
            console.log(value);
            console.log(this.value);
        }
    }
})()

var obj2 = (function () {
    var value = "2-1";
    return{
        value:"2-2",
        say:function () {
            console.log(value);
            console.log(this.value);
        }
    }
})()

say();
obj1.say();
obj2.say();
obj1.say = say;
obj1.say();
obj1.say = obj2.say;
obj1.say();
