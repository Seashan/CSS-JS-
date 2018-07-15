/**
 * Created by heshan on 2017/5/25.
 */
function Find(target, array)
{
    // write code here
    let col=0;
    let colLength=array[0].length;
    let rowLength=array.length;
    let row=rowLength-1
    while(row>=0&&col<colLength)
    {
        if(target===array[row][col])return true
        else if(target>array[row][col])col++;
        else row--
    }
    return false
}
console.log(Find(6,[[0,1,2],[1,2,3],[2,3,4],[3,4,5]]))