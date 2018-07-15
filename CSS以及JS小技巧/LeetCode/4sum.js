/**
 * Created by heshan on 2017/9/2.
 */
/*解法一 利用暴力解结合3sum的方法，外面再加一层循环，一样的逻辑*/
function fourSum(nums,target) {
    nums.sort(function(a,b){return a-b;})
    var res = [],len = nums.length;
    for(var i=0; i<len-3;i++){
       for(var j = i+1;j<len-2;j++){
           for(var left = j+1,right =len-1;left<right;){
               var tem = nums[i] + nums[j] + nums[left] + nums[right];
               if(tem === target){
                   res.push([nums[i],nums[j],nums[left],nums[right]]);
                   /*去重*/
                   while(nums[left+1] ===nums[left])left++;
                   while(nums[right] === nums[right-1])right--;
                   left++;
                   right--;
               }
               else if(tem >target){
                   /*去重*/
                   while(nums[right] === nums[right-1])right--;
                   right--;
               }
               else{
                   /*去重*/
                   while(nums[left+1] ===nums[left])left++;
                   left++;
               }
           }
           while(nums[j] === nums[j+1])j++;
       }
        while(nums[i] === nums[i+1])i++;
    }
    return res;

}
var res = fourSum([1,0,-1,0,-2,2],0);
console.log(res)