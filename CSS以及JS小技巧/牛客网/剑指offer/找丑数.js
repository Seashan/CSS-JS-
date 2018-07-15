/**
 * Created by heshan on 2017/6/2.
 */
    function GetUglyNumber_Solution(index) {
        if (index === 0) return 0;
        var uglyNum = [1];
        var factor2 = 0,
            factor3 = 0,
            factor5 = 0;
        for (var i = 1; i < index; i++) {
            uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
            if (uglyNum[i] === uglyNum[factor2] * 2) factor2++;
            if (uglyNum[i] === uglyNum[factor3] * 3) factor3++;
            if (uglyNum[i] === uglyNum[factor5] * 5) factor5++;
        }
        return uglyNum[index - 1];
    }
