function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var len=input.length;
    if(k>len) {return [];}
    if(k<0){return [];}
    var preIndex;
    var current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = input[i];
        while(preIndex >= 0 && input[preIndex] > current) {
            input[preIndex+1] = input[preIndex];
            preIndex--;
        }
        input[preIndex+1] = current;
    }
    return input.splice(0,k);


}
function swap(arr,i,j){
    var tem=arr[i];
    arr[i]=arr[j];
    arr[j]=tem;
}
GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4)