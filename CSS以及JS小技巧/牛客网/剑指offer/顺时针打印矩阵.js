/**
 * Created by heshan on 2017/7/10.
 */
function printMatrix(matrix)
{
    // write code here
    if(matrix.length===0)
    {
        return;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    while(cols>start*2 && rows>start*2)
    {
        print(start,cols,rows,matrix);
        start++;
    }
}

function print(start,cols,rows,matrix)
{
    var endY=rows - 1 -start;
    var endX = cols - 1 -start;
    for(var i=start; i<=endX; i++)
    {
        console.log(matrix[start][i])
    }
    if(start <endY)
    {
        for(var i=start+1 ;i<=endY;i++)
        {
            console.log(matrix[endX][i])
        }
    }
    if(endX > start && endY > start)
    {
        for(var i=endX-1;i>=start;i--)
        {
            console.log(matrix[endY][i])
        }
    }
    if(start<endX && (start + 1)<endY)
    {
        for(var i=endY-1;i>start;i--)
        {
            console.log(matrix[i][start])
        }
    }
}

printMatrix([[1,2,3,4,5]])