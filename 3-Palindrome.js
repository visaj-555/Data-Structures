const isPalindrome = function(x) {
    

    return x < 0? false : x === +x.toString().split("").reverse().join("");


}

const res = isPalindrome(10001);

console.log(res);