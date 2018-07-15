/**
 * Created by heshan on 2017/5/25.
 */
//利用正则表达式的方式实现
/*function replaceSpace(str)
{
    // write code here
    console.log(str.replace(/\s/g,'%20'))
}*/


//利用遍历替换
//从左到右计算空格个数，从右到左进行替换
function replaceSpace(str)
     {
    let count=0;
    let length=str.length;
    str=str.split('');//字符串是不能直接被修改的，所以先转换为数组
    for(let i=0;i<length;i++){
        if(str[i]==' ')
            count++;
    }
    for(let i=length-1;i>=0;i--){
        if(str[i]!=' '){
            str[i+2*count]=str[i];
        }
        else{
            count--;
            str[i+2*count]='%';
            str[i+2*count+1]='2';
            str[i+2*count+2]='0';
        }
    }
    return str.join('')
}

console.log(replaceSpace("hello  world"))