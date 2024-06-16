# Most Common DSA for Interviews

This project has the most mentioned topics in code interviews and how they can be implemented.

I broke it in folders so I could add multiple languages for each implementation, but this readme will cover all of them in JavaScript so it can be used as a quick lookup.

Good luck in your preparation!

### 1. **Creating a 2D Array**

```javascript
const rows = 3;
const cols = 4;
const array = Array.from({ length: rows }, () => Array(cols).fill(0));

console.log(array);
// Output: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

### 2. **Breadth-First Search (BFS)**
BFS is typically used for traversing or searching tree or graph data structures.

```javascript
function bfs(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);

    for (const child of node.children) {
      queue.push(child);
    }
  }

  return result;
}
```

### 3. **Depth-First Search (DFS)**
DFS is another way to traverse tree or graph data structures.

```javascript
function dfs(node, result = []) {
  if (!node) return;

  result.push(node.val);
  for (const child of node.children) {
    dfs(child, result);
  }

  return result;
}
```

### 4. **Binary Search**
Binary Search is an efficient algorithm for finding an item from a sorted list of items.

```javascript
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
```

Recursive Binary Search:
```javascript
function binarySearch(arr, target, L = 0, R = arr.length - 1) {
    if(L > R) return -1;

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, R);
    if (arr[mid] > target) return binarySearch(arr, target, L, mid - 1);

    return -1; // Target not found
}
```


### 5. **Two-Pointer Technique**
The two-pointer technique is often used for problems involving arrays or linked lists.

```javascript
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }

  return null; // No solution found
}
```

### 6. **Sliding Window Technique**
This technique is used to solve problems that involve subarrays of a fixed size.

```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

### 7. **Fast and Slow pointers of a Linked List**
Using the slow and fast pointer technique.

```javascript
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

### 8. **Reversing a Linked List**
Iterative approach to reverse a singly linked list.

```javascript
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

### 9. **Topological Sort (Kahn’s Algorithm)**
Used for Directed Acyclic Graph (DAG).

```javascript
function topologicalSort(vertices, edges) {
  const inDegree = new Array(vertices).fill(0);
  const adjList = new Map();

  for (let [u, v] of edges) {
    if (!adjList.has(u)) adjList.set(u, []);
    adjList.get(u).push(v);
    inDegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < vertices; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const sortedOrder = [];
  while (queue.length > 0) {
    const vertex = queue.shift();
    sortedOrder.push(vertex);

    for (let neighbor of (adjList.get(vertex) || [])) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  if (sortedOrder.length !== vertices) {
    throw new Error('Graph has a cycle!');
  }

  return sortedOrder;
}
```

### 10. **Union-Find (Disjoint Set)**
Commonly used for finding cycles in an undirected graph or finding disjointed graphs.

```javascript
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, index) => index);
    this.rank = Array(size).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}
```

### 11. **Dynamic Programming - Memoization**
Example of a top-down approach with memoization for Fibonacci sequence.

```javascript
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(10)); // 55
```

### 12. **Dynamic Programming - Tabulation**
Example of a bottom-up approach for Fibonacci sequence.

```javascript
function fib(n) {
  if (n <= 2) return 1;
  
  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

console.log(fib(10)); // 55
```

### 13. **Trie Data Structure**
Used for efficient retrieval of keys in a dataset of strings.

```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
```

### MinHeap - Priority Queue
Min-heaps are an essential data structure in computer science, often used to efficiently maintain the smallest (or largest) elements in a collection.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Method to push a new value into the heap
    push(value) {
        this.heap.push(value);
        this.percolateUp(this.heap.length - 1);
    }

    // Method to percolate up
    percolateUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // Parent's index
            if (this.heap[index] < this.heap[parentIndex]) { // If child is less than parent
                // Swap child and parent
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                // Move up to the parent's index
                index = parentIndex;
            } else {
                // The heap property is restored
                break;
            }
        }
    }

    // Method to peek at the minimum value
    peek() {
        return this.heap[0];
    }

    // Method to pop the minimum value from the heap
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.percolateDown(0);

        return min;
    }

    // Method to percolate down
    percolateDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1; // Left child's index
            let rightChildIndex = 2 * index + 2; // Right child's index
            let leftChild, rightChild;
            let swap = null;

            // Check if left child exists and is less than the element
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            // Check if right child exists and is less than the smallest so far
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                        (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            // If no swap needed, the heap property is restored
            if (swap === null) break;

            // Swap element with the smallest child
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

```

