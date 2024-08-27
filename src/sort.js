function foo(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = 
                          [arr[j + 1], arr[j]];
          }
      }
  }
  return arr;
}
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(foo(arr1));