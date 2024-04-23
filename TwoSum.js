function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (map[remaining] !== undefined) {
            return [map[remaining], i];
        }
        map[nums[i]] = i;
    }
    return null; 
}

const nums = [2,7,5,11]; 
target = 9;
console.log(twoSum(nums, target)); 
