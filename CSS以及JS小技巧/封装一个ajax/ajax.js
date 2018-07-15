/**
 * Created by heshan on 2017/7/23.
 */
function ajax(){
    this.opt = arguments;
    this.init();
}
ajax.prototype.init = function(){
    if(this.opt.before){
        this.opt.before();
    }
    this.paramData();
    this.dataType === "jsonp" ?  this.createJSONP() :this.createXHR();
}

ajax.prototype.getXHR = function (){
    if(window.XMLHttpRequest)
    {
        return new XMLHttpRequest();
    }
    else if(window.ActiveXObject)
    {
        /*IE中的各个版本号,尽量采用最新的版本号*/
        var msxml = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML3.XMLHTTP",
            "Microsoft.XMLHTTP",
            "MSXML2.XMLHTTP.3.0"
        ];
        for(var  i = 0 ,len = msxml.length ;i<len;i++)
        {
            try{
                var xhr = new ActiveXObject(msxml[i]);
                return xhr;
            }
            catch (err){
                throw new Error(err.message);
            }
        }
    }
}

 ajax.prototype.paramData = function(){
    /*第一种情况是直接以name=val&name1=val1的形式传递的*/
    if(typeof this.opt.data === "string"){
        var  paramData = paramData.split("&");
        if(paramData){
             var str = [];
             for(var i = 0,len = paramData.length; i<len ;i++)
             {
                 var name = encodeURIComponent(paramData[i].split("=")[0].toString());
                 var val = encodeURIComponent(paramData[i].split("=")[1].toString());
                 str.push(name + "=" + val);
             }
            this.opt.data = str.join("&");
        }
    }
    /*post请求中的object参数*/
    if(typeof this.opt.data === "object"){
        var str = [];
        for(var key in this.opt.data)
        {
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(this.opt.data[key].toString()));
        }
        this.opt.data = str.join("&");
    }
}

 ajax.prototype.createXHR = function (){
   var xhr = this.getXHR();
   xhr.onreadystatechange = function () {
       if(xhr.readyState === 4){
           if(xhr.status > 200 && xhr.status < 300 || xhr.status === 304){
               var responseText = xhr.responseText;
               try{
                   this.opt.success(JSON.parse(responseText))
               }
               catch (err){
                  console.log("ajax error for json parse responseText");
               }
           }else{
               this.opt.error(xhr);
           }
       }
   }
   xhr.open(this.opt.type,this.opt.url,this.opt.async);
    if (this.opt.type === "POST" && !this.opt.contentType) {
        //若是post提交，则设置content-Type 为application/x-www-four-urlencoded
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    } else if (this.opt.contentType) {
        xhr.setRequestHeader("Content-Type", this.opts.contentType);
    }
    xhr.send(this.opt.type === "GET" ? null: this.opt.data);
}

ajax.prototype.createJSONP = function jsonp(){
     var script = document.createElement("script");
     script.type = "text/javascript";
     /*可以利用事件来控制也可以直接将回调函数加到url后面*/
     if(script.readyState)/*兼容IE浏览器*/
     {
         script.onreadystatechange = function () {
             if(script.readyState === "loaded" || script.readyState === "complete")
             {
                 script.onreadystatechange = null;
                 callback();
             }
         }
     }
     else {/*其他浏览器*/
         script.onload = function () {
             callback();
         }
     }
    // script.src = this.opt.url + this.opt.url.indexOf("?") > 0 ? "":"?" + "callback=" + callback ;/*使用上面的事件监听后就不用将callback加到url后面*/
     script.src = this.opt.url;
     document.body.appendChild(script);
}
/*jsonp的回调函数*/
function callback (data){};

/*发送ajax请求*/

new ajax({
    url: "", //ajax 请求地址
    type : "GET", //请求的方法,默认为GET
    data : null, //请求的数据
    contentType :"",//请求头
    dataType : "json", //请求的类型,默认为json
    async : true, //是否异步，默认为true
    before : function() {
        console.log("before")
    }, //发送之前执行的函数
    error: function() {
        console.log("error")
    }, //错误执行的函数
    success: function() {
        console.log("success")
    } //请求成功的回调函数
})