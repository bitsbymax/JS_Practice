/*https://www.youtube.com/watch?v=GoQFtH5MXLE&ab_channel=Front-endSciencec%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%BC*/

const input1 = [1,8,6,2,5,4,8,3,7] // 49
const input2 = [1,1] // 1
const input3 = [4,3,2,1,4] // 16
const input4 = [1,2,1] // 2
debugger

function maxArea(height) {
  
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentVolume = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentVolume);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea(input1));
