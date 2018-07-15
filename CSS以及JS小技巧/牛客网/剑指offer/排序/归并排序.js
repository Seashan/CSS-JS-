
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));

}
function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
  /*  while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }*/
   /*利用从c欧尼cat代替上面的两种情况*/
    return result.concat(left,right);
}

console.log(mergeSort([2,54,5,3,9,34]))
