// Kahn's BFS iterative algorithm
function topologicalSort(graph, vertices) {
  const inDegree = new Map();
  const queue = [];
  const result = [];

  // Initialize in-degree for each vertex
  for (const vertex of vertices) {
    inDegree.set(vertex, 0);
  }

  // Calculate in-degree for each vertex
  for (const [_, neighbors] of graph) {
    for (const neighbor of neighbors) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }

  // Add vertices with zero in-degree to the queue
  for (const [vertex, degree] of inDegree) {
    if (degree === 0) {
      queue.push(vertex);
    }
  }

  // Process vertices in the queue
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);

    for (const neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Check for cycle
  if (result.length !== vertices.length) {
    throw new Error("Graph has a cycle!");
  }

  return result;
}

// Kahn's DFS algorithm
function topologicalSortDFS(graph, vertices) {
  const visited = new Set();
  const result = [];

  function dfs(vertex) {
    visited.add(vertex);
    for (const neighbor of graph.get(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    result.unshift(vertex);
  }

  for (const vertex of vertices) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return result;
}
