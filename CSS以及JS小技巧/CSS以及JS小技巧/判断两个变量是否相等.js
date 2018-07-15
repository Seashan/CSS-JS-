function identity(val1, val2) {
    if(typeof(val1)==='object'){
        if(typeof(val2)!=='object')
            return false;
        for(var key in val1){
            if(val2.hasOwnProperty(key))
            {
                if(typeof (val2[key])==='object')
                {
                    identity(val1[key],val2[key]);
                }
                else if(val1[key]!==val2[key]) return false;
                else continue;
            }

        }
        return true;
    }
    return val1===val2;
}
var a={
    obj:1,
    aa:3,
    bb:{
        c:1,
        d:[1,2,3]
    }
}

var b={
    obj:1,
    aa:3,
    bb:{
        c:1,
        d:[1,2,3]
    }
}
console.log(identity(a,b));