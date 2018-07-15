/**
 * Created by heshan on 2017/6/15.
 */
/*cookie的maxAge为负数表示是会话cookie，为正值则表示设置过期时间，maxAge的默认值是-1，maxAge为0则表示删除该name属性的cookie，
如果要删除cookie则用同名的cookie的name对已有的cookie进行覆盖同时设置maxAge为0*/
cookieUnit={
    setCookie:function (name,val,expire,domain,secure,path) {
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if(expire instanceof Date)
            cookieText+=';expire='+expire;
        if(domain)
            cookieText+=";domain="+domain;
        if(secure)
            cookieText+=";secure="+secure;
        if(path)
            cookieText+=";path="+path;
        document.cookie=cookieText;
    },
    getCookie:function (name) {
        var cookieText=document.cookie;
        var cookies=cookieText.split(";");
        for(var i=0;i<cookies.length;i++)
        {
            var obj=cookies.split('=');
            if(obj[0]===decodeURIComponent(name))
                return decodeURIComponent(obj[1]);
        }
        return null;

        /*利用另外一种方式获取*/
      /*  var cookieName = encodeURIComponent(name) + '=';
        var cookieStart = document.cookie.indexOf(cookieName);
        var cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;*/
    },
    removeCookie:function (name) {
        var date=new Date(0);
        document.cookie+=name+'=;expire='+date;
    }
}