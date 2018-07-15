/**
 * Created by heshan on 2017/7/26.
 */
"i am a girl".replace(/(\S+\s*)/g,function(str){

    return str.slice(0,1).toUpperCase()+str.slice(1)

});
//"I Am A Girl"