
/*自定义排序规则，利用sort函数*/
function printMinNum(arr) {
   arr.sort(function(a,b){
       console.log(a,b)
        a = a.toString();
        b = b.toString();
        var index = 0;
        while(index <= a.length && index <= b.length){
            if(a[index] < b[index]){
                return -1;
            }
            else if(a[index] > b[index]){
                return 1;
            }
            else{
                index++;
            }
        }
      return  index === a.length + 1 ? arguments.callee(parseInt(a),parseInt(b.slice(a.length))):arguments.callee(parseInt(a.slice(b.length)),parseInt(b));
    })

    console.log(arr.join(""));
}
printMinNum([3,332,3321]);
