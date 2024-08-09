function calculateMean(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum / nums.length;
}

function calculateMedian(nums) {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function calculateMode(nums) {
  const frequency = {};
  nums.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));

  let maxFreq = 0;
  let mode;
  for (let num in frequency) {
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  }
  return parseFloat(mode);
}
