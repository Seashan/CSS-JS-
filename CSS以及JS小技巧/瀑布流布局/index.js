/**
 * Created by heshan on 2017/4/19.
 */

var n=0;/*用于标记已经加载的图片避免重加载*/
var hArr=[];/*全局变量实现懒加载*/
window.onload=function(){

    waterfall('main','box');
    var dataInt={"data":[{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"34.jpg"},{"src":"35.jpg"},{"src":"36.jpg"}]};
    window.onscroll=function () {
        /*console.log(window.pageYOffset)
        console.log(document.body.scrollTop)
        console.log(document.documentElement.scrollTop)*//*所有主流浏览器的方式和标注模式和混合模式*/
        var oParent=document.getElementById('main');
        var oBoxs=getByClass(oParent,"box");
        for(var i=0;i<dataInt.data.length;i++)
        {
            var lastHeight=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;/*混杂模式和标准模式下滚动条滚动的高度*/
            var height=document.body.clientHeight||document.documentElement.clientHeight;/*混杂模式和标准模式下浏览器可视区域的高度*/
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
        waterfall('main','box');
        }
    }
}
function waterfall(parent,box){
  //  console.log(hArr)
    var oParent=document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
    /*计算页面显示的列数*/
    var oBoxW=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    for(var i=n;i<oBoxs.length;i++)
    {
        if(i<cols)
        {
            hArr.push(oBoxs[i].offsetHeight);
        }
        else{
            var minH=Math.min.apply(null,hArr);
            var index=getMinHIndex(hArr,minH);
            oBoxs[i].style.position="absolute";
            oBoxs[i].style.top=minH+"px";
            oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
        n++;
    }

}

function getByClass(parent,className) {
    var boxArr=parent.getElementsByClassName(className);
    return boxArr;
}
function  getMinHIndex(arr,val) {
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==val)
        {
            return i;
        }
    }
}

