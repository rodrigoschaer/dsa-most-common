# Depth First Search

DFS is a common technique used to traverse a tree or graph, usually implemented with recursion.

The DFS are most used when we want to prioritize the depth, which is, when we want to explore a side of the tree first.

DFS is a type of backtracking, where we backtrack to the parent node after we explored the whole depth

There are 3 common uses of the DFS:
- In-order traversal: we will process a side of the structure, perform some action, and then go to the other side.
- Pre-order traversal: we need to take an action before processing the node's children
- Post-order traversal: we need to process all the subtree (current nodes descendants) and then take some action

When to use:
- When exploring all possibilities;
- Traversing tree or graph structures.

How to use:
- Use recursion or a stack to explore as far as possible along each branch before backtracking.

Why to use:
- Useful for solving problems involving exhaustive search and traversal.
