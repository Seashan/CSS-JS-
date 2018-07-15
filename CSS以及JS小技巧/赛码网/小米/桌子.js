/**
 * Created by heshan on 2017/9/18.
 */
/*加上首位判断两个零的情况*/
function fun(table, n) {
    if(table.length<=0){return false;}
    var cnt = n;
    table = table.split("");
    table.map((num)=> {
        return parseInt(num);
    });
    for (var i = 1; i < table.length - 1; i++) {
        if (table[i - 1] == 0 && table[i + 1] == 0 && table[i] == 0) {
            table[i] = 1;
            cnt--;
        }
    }
    if(cnt==0){
        return true;
    }else{
        return false;
    }
}