function FindSum(array){
    let left  = 0;
    let right = array.length - 1;

    while(left < right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]];
        }else if(sum < 0){
            left++;
        }else if(sum > 0 ){
            right--;
        }
    }
    return null;

}

console.log(FindSum([-5,-4,-3,-2,-1,  10, 8,6,4]));

