//这里占有一个新线程，向主线程发送消息
postMessage("hello");
//实现之前的一个实例，看是否阻塞
setTimeout(function () {
    console.log("end 2");
}, 2000);
setTimeout(function () { console.log("end 1"); }, 100);
onmessage=function (event) {/*向主线程发送消息*/
    console.log(event.data)
}
console.log("end");