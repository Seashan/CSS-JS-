
/* 外观模式是简化某些内容的一种手段，说白了就是对复杂操作的一种封装，就是一个函数，如对ajax的操作的封装*/

function ajaxCall(type,url,callback,data){
    // 根据当前浏览器获取对ajax连接对象的引用
    var xhr=(function(){
            try {
                // 所有现代浏览器所使用的标准方法
                return new XMLHttpRequest();

            }catch(e){}

            // 较老版本的internet Explorer兼容
            try{

                return new ActiveXObject("Msxml2.XMLHTTP.6.0");

            }catch(e){}

            try{

                return new ActiveXObject("Msxml2.XMLHTTP.3.0");

            }catch(e){}

            try{

                return new ActiveXObject("Microsoft.XMLHTTP");

            }catch(e){}

            // 如果没能找到相关的ajax连接对象，则跑出一个错误。
            throw new Error("Ajax not support in this browser.");

        }())
     var  STATE_LOADED=4;
       var  STATUS_OK=200;

    // 一但从服务器收到表示成功的相应消息，则执行所给定的回调方法
    xhr.onreadystatechange = function(){
        if(xhr.readyState !==STATE_LOADED){
            return;
        }
        if(xhr.state==STATUS_OK){
            callback(xhr.responseText);
        }
    }

    // 使用浏览器的ajax连接对象来向所给定的URL发出相关的调用
    xhr.open(type.toUpperCase(),url);
    xhr.send(data);
}

// 使用方法
ajaxCall("get","/user/12345",function(rs){
    alert("收到的数据为："+rs);
})