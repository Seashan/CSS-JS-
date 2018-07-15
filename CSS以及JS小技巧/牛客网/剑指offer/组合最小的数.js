function Comparator(a, b) {
    var s1 = a + "" + b;
    var s2 = b + "" + a;
    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) > s2.charAt(i)) {
            return 1;
        }
        if (s1.charAt(i) < s2.charAt(i)) {
            return -1;
        }
    }
    return 1;
}

function PrintMinNumber(numbers) {
    numbers.sort(Comparator);
    var result = "";
    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
}
console.log(PrintMinNumber([1,32,13]));