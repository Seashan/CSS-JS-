/**
 * Created by heshan on 2017/6/1.
 */
function binary_search(arr,num){
    arr.sort(function(a,b){
        return a-b;
    });
    var low=0;
    var high=arr.length-1;
    var mid=Math.floor((low+high)/2);
    while(low<=high){
        if(num>arr[mid]){
            low=mid+1;
        }
        else if(arr[mid]===num){
            return true
        }
        else{
            high=mid-1;
        }
        mid=Math.floor((low+high)/2);
    }
   return false;
}
console.log(binary_search([4,2,6,3,8,5],6));