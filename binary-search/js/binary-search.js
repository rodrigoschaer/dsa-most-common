// Iterative
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Target not found
}

// Recursive
function binarySearch(arr, target, L = 0, R = arr.length - 1) {
  // Base case
  if (L > R) return -1;

  const M = Math.floor((L + R) / 2);

  if (arr[M] === target) {
    return M;
  } else if (arr[M] > target) {
    return binarySearch(arr, target, L, M - 1);
  } else if (arr[M] < target) {
    return binarySearch(arr, target, M + 1, R);
  }

  // Safe return
  return -1;
}
