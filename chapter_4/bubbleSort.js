function bubbleSort(arr) {
  let sorted = false;
  let len = arr.length - 1;
  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    len--;
  }
  return arr;
}

console.log(bubbleSort([9, 5, 1, 4, 0]))
