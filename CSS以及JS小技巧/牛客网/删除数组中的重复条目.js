
Array.prototype.deleteSame=function (){
    var that=this;
    var del=[];
    for(var i=0;i<that.length;i++)
    {
        var item=that[i];
        while(that.lastIndexOf(item)!=-1&&that.lastIndexOf(item)!=i)
        {
            del=del.concat(that.splice(that.lastIndexOf(item),1));
        }

    }
    return del;
}
var a=[1,3,5,7,3,5,78,4,2,5]
 var b=a.deleteSame();
 console.log(b)
