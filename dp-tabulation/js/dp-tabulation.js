function fib(n) {
  if (n <= 2) return 1;

  // Create the dp table
  const dp = new Array(n).fill(0);

  // Populate with base cases
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
