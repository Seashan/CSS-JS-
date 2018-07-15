/**
 * Created by heshan on 2017/6/1.
 */
function clone(obj){
    var o;
    switch(typeof(obj)){
        case 'undefined':break;
        case 'number':
        case 'string':
        case 'boolean':o=obj;break;
        case 'object':
            if(obj===null) o=null;
            if(obj instanceof Array)
            {
                o=[];
                for(var i=0;i<obj.length;i++)
                {
                    o.push(clone(obj[i]));
                }
            }
            else{
                o={};
                for(var key in obj)
                {
                    o[key]=clone(obj[key]);

                }
            }
        default:o=obj;
    }
    return o;
}
