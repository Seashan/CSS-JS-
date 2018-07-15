
function findMax(arr){
    var result = [];
    var stack = [];
    for(var i = 0 ;i< arr.length;i++){
        if(stack.length === 0 || arr[stack[stack.length - 1]] >= arr[i]){
            stack.push(i);
        }else{
            while(arr[stack[stack.length - 1]] < arr[i]){
                result[stack.pop()] = arr[i];
            }
            stack.push(i);
        }
    }
    return result;
}

console.log(findMax([1,3,2,7,2,3,4,8]));