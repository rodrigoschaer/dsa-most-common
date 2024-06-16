// Return the minimum number of intervals to remove so there are no overlaps
function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;

  const [START, END] = [0, 1];
  intervals.sort((a, b) => a[END] - b[END]);

  let count = 0;
  let end = intervals[0][END];

  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][START];
    if (start < end) {
      count++;
    } else {
      end = intervals[i][END];
    }
  }

  return count;
}
