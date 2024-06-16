# Backtracking

Is a technique to explore a set of possibilities pretty much like a Depth First Search. 

When we want to find an exit of a maze, for example, the brute force way would be a backtrack solution: choose a path an keep going. If we hit a wal we can go back (backtrack) and choose the next path. 

When to Use:
- When exploring all potential solutions to find the valid ones.
- Problems involving permutations, combinations, and subsets.

How to Use:
- Use recursion to explore all potential solutions.
- Backtrack when a solution is found or when a dead end is reached.

Why to Use:
- Useful for problems where the solution needs to be constructed incrementally and multiple solutions are possible.
