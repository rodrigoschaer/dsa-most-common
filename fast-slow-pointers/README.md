# Fast and Slow Pointers

Is a two-pointer tecnique for Linked Lists used to find a cycle or the middle node of the list in `O(logn)` time.

When to Use:
- When dealing with cyclic data structures.
- Detecting cycles in a linked list.
- Finding the middle of a linked list.

How to Use:
- Use two pointers, one moving twice as fast as the other.
- The slow pointer moves one step at a time, while the fast pointer moves two steps.

Why to Use:
- Efficient for cycle detection and finding the middle element, usually in O(n) time complexity.
