function twoSum(nums, target){
    for(var i = 0;i<nums.length;i++){
        var utarget = target - nums[i]
        var s= nums.indexOf(utarget)
        if(s != -1){
            return [i,s]
        }
    }
}
var nums = [3, 2, 4, 6];
var target = 9
console.log(twoSum(nums,target))
var threeSum = function(nums) {
    var newarr = [];
    for(let i = 0;i<nums.length;i++){
     for(let j = i+1;j<nums.length;j++){
       for(let k = j+1;k<nums.length;k++){
        if(nums[i] + nums[j]+nums[k] === 0){
           newarr.push([nums[i],nums[j],nums[k]])
           }
    } 
    }   
    }
    return Array.from(new Set(newarr))
};
var nums1 = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums1))
