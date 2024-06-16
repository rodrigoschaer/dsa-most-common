// There are many operations with intervals
// The most common are merging and identifying intersections
const [START, END] = [0, 1];

function mergeIntervals(intervals) {
  if (intervals.length <= END) {
    return intervals;
  }

  intervals.sort((a, b) => a[START] - b[START]);

  const merged = [intervals[START]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[START] <= lastMerged[END]) {
      lastMerged[END] = Math.max(lastMerged[END], current[END]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

function intervalIntersection(A, B) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    const start = Math.max(A[i][START], B[j][START]);
    const end = Math.min(A[i][END], B[j][END]);

    if (start <= end) {
      result.push([start, end]);
    }

    if (A[i][END] < B[j][END]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
