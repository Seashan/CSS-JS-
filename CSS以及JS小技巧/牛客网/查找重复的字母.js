function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str) /*利用正则表达式的前向引用，将第一个分组中的元素重新引用一次*/
}