function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  for (const size of sizes) {
    let [width, height] = size;
    if (height > width) {
      [width, height] = [height, width];
    }
    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }

  return maxWidth * maxHeight;
}
