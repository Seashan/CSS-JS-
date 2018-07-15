var searchInsert = function(nums, target) {
    if(nums.indexOf(target) >= 0) {
        return nums.indexOf(target);
    }
    var len =nums.length;
    var start = 0;
    var end = len-1;
    var mid =Math.floor(len/2);
    while(start <= end){
        if(mid===0 && nums[mid]>target){
            return 0;
        }
        if(nums[mid]> target && nums[mid-1]>target){
            end = mid-1;
            mid = Math.ceil((start+end)/2);
        }
        else  if(nums[mid]<target && nums[mid+1]<target){
            start = mid+1;
            mid = Math.ceil((start+end)/2);
        }
        else if(nums[mid]>target && nums[mid-1]<target){
            return mid;
        }
        else{
            return mid+1;
        }


    }
};
console.log(searchInsert([1,3],0));