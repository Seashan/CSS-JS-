/**
 * Created by heshan on 2017/9/20.
 */
function searchNpm(arr,key){
    var reg = new RegExp(key,"i");
    var regStartEnd = new RegExp("^"+key+"$");
    var regStart = new RegExp("^" + key);
    var res = [];
    for(var i = 0;i< arr.length;i++){
        if(reg.test(arr[i])){
                res.push(arr[i]);
        }
    }
    if(res.length == 0) return ["error"];
    res.sort(function(a,b){
        if(a.match(regStartEnd)){
            return -1;
        }else if(b.match(regStartEnd)){
            return 1;
        }else if(a.match(regStart) && !b.match(regStart)){
            return -1;
        }else if(!a.match(regStart) && b.match(regStart)){
            return 1;
        }else {
            return a <= b? -1 :1;
        }
    })
    return res;
}
searchNpm(["ykit-config-yo","mykit","fekit","ykit-config-fekit","ykit","ykit-","y"],"ykit").map(function(val){console.log(val)});