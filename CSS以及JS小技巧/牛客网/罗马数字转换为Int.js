 /*解法一*/
    function solution(number){
        if(number>3999||number<1)return -1;
        var arr=['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
        arr=arr.reverse();
        var array=['1','4','5','9','10','40','50','90','100','400','500','900','1000'];
        array=array.reverse();
        var result='';
        for(var i=0;i<array.length;i++)
        {
            while(array[i]<=number)
            {
                result+=arr[i];
                number-=array[i];
            }
        }
        return result;
    }

    /*解法二
      1、相同的数字连写，所表示的数等于这些数字相加得到的数，如：Ⅲ = 3；
      2、小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数， 如：Ⅷ = 8；Ⅻ = 12；
      3、小的数字，（限于Ⅰ、X 和C）在大的数字的左边，所表示的数等于大数减小数得到的数，如：Ⅳ= 4；Ⅸ= 9；
     */
 var romanToInt = function(s) {
     var sum =0;
     var arr = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
     for(var i =0; i<s.length;i++){
         var val = arr[s[i]];
         if(i===s.length-1|| arr[s[i+1]] <= arr[s[i]]) sum+=val;
         else sum-=val;
     }
     return sum;
 };