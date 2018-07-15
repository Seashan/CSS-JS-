/**
 * Created by heshan on 2017/8/18.
 */
onconnect = function (ev) {
    var port = ev.port[0];
    port.postMessage("你好！")
}