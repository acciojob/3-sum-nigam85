function threeSum(arr, target) {
  //your code here
	if (arr.length < 3) {
    return 0; // Not enough elements to form a triplet
  }
		arr.sort((a, b) => a - b); // Sort the array in ascending order
	  let closestSum = arr[0] + nums[1] + nums[2]; 

	for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
}
 while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum; // Update the closest sum
		  if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
      }
module.exports = threeSum;
