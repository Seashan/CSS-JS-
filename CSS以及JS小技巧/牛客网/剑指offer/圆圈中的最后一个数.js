/**
 * Created by heshan on 2017/6/14.
 */
/*利用递归实现*/
function LastRemaining_Solution(n, m) {
    if(n === 0) {
        return -1;
    }
    if(n === 1) {
        return 0;
    }
    return (LastRemaining_Solution(n-1, m)+m) % n;
}