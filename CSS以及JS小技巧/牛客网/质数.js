/**
 * Created by heshan on 2017/5/19.
 */

function isPrime(number) {

    if (typeof number !== 'number' || number<2) {
        // 不是数字或者数字小于2
        return false;
    }

    if (number === 2) {//2是质数
        return true;
    } else if(number % 2 === 0){//排除偶数
        return false;
    }
    var squareRoot = Math.sqrt(number);


    for(var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(100000))