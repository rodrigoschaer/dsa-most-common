// Simple BFS implementation
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

// Sometimes we want to process the whole level first and THEN update the queue

// BFS using an intermediate array for the next level
function bfsWithIntermediateArray(root) {
  if (!root) return;

  let currentLevel = [root];
  let nextLevel = [];

  while (currentLevel.length > 0) {
    for (let node of currentLevel) {
      // Process node (e.g., print value)

      // Enqueue children to nextLevel
      for (let child of node.children) {
        nextLevel.push(child);
      }
    }

    // Move to the next level
    currentLevel = nextLevel;
    nextLevel = [];
  }
}

// BFS counting every level
function bfsCountingLevels(root) {
  if (!root) return;

  let queue = [root];
  let levelCount = 0;

  while (queue.length > 0) {
    levelCount = queue.length;

    while (levelCount > 0) {
      let node = queue.shift();
      console.log(node.value);

      for (let child of node.children) {
        queue.push(child);
      }

      levelCount++;
    }
  }
}

// BFS storing the level in the queue pair (useful for graphs)
function bfsWithLevelInQueue(root) {
  if (!root) return;

  let queue = [{ node: root, level: 0 }];
  let currentLevel = 0;

  while (queue.length > 0) {
    let { node, level } = queue.shift();

    if (level > currentLevel) {
      console.log(`End of level ${currentLevel}`);
      currentLevel = level;
    }

    // Process node (e.g., print value)
    console.log(`Node ${node.value} at level ${level}`);

    // Enqueue children with incremented level
    for (let child of node.children) {
      queue.push({ node: child, level: level + 1 });
    }
  }
}
