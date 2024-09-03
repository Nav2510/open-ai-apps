function foo(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = foo(arr.slice(0, mid));
    const right = foo(arr.slice(mid));

    return merg(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length &&
            rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex))
                 .concat(right.slice(rightIndex));
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(foo(arr));