/**
 * Created by heshan on 2017/4/19.
 */
window.onload=function () {
    var dataInt={"data":[{"src":"P_00.jpg"},{"src":"P_01.jpg"},{"src":"P_02.jpg"},{"src":"P_03.jpg"},{"src":"P_05.jpg"},{"src":"P_06.jpg"},{"src":"P_07.jpg"}]};
   window.onscroll=lazyLoad;
    function lazyLoad() {
    var oParent=document.getElementById('main');
    var oBoxs=getByClass(oParent,"div");
    for(var i=0;i<dataInt.data.length;i++)
    {
        var lastHeight=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;/*标准模式和混杂模式下滚动条滚动的高度*/
        var height=document.body.clientHeight||document.documentElement.clientHeight;/*标准模式和混杂模式下浏览器可视区域的高度*/
        if(lastHeight<scrollTop+height)
        {
            var oBox=document.createElement("div");
            oBox.className="box";
            oParent.appendChild(oBox);
            var pic=document.createElement("div");
            pic.className="pic";
            oBox.appendChild(pic);
            var img=document.createElement('img');
            img.src='images/'+dataInt.data[i].src;
            pic.appendChild(img);
        }
    }
}
}

function getByClass(parent,className) {
    var boxArr=parent.getElementsByTagName(className);
    return boxArr;
}
