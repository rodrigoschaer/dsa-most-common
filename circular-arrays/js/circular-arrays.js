// Accessing elements
function getCircularElement(arr, index) {
  const n = arr.length;
  // Calculate the circular index
  const circularIndex = ((index % n) + n) % n;
  return arr[circularIndex];
}

// Rotating a circular array
function rotateCircularArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n

  // Reverse the entire array
  reverse(arr, 0, n - 1);
  // Reverse the first k elements
  reverse(arr, 0, k - 1);
  // Reverse the remaining elements
  reverse(arr, k, n - 1);

  return arr;

  function reverse(arr, L, R) {
    if (L >= R) return;

    [arr[L], arr[R]] = [arr[R], arr[L]];

    reverse(arr, L + 1, R - 1);
  }
}

// Creating a circular iterator
class CircularIterator {
  constructor(arr) {
    this.array = arr;
    this.index = 0;
  }

  next() {
    const value = this.array[this.index];
    this.index = (this.index + 1) % this.array.length;
    return value;
  }
}
