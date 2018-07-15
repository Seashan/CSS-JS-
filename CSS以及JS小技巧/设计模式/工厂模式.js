/**
 * Created by heshan on 2017/7/30.
 */
/*工厂模式主要是用于生产对象*/
function createObj() {
    var obj = new Object();
    obj.name = "jack";
    obj.getName = function () {
        return this.name;
    }
    return obj;
}