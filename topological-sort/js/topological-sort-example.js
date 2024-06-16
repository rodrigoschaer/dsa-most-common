// Given a list of courses and their prerequisites, determine a sequence in which all courses can be taken.

function findOrder(numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = new Array(numCourses).fill(0);
  const result = [];

  // Initialize graph and in-degree
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    graph.get(prerequisite).push(course);
    inDegree[course]++;
  }

  // Perform topological sort using Kahn's algorithm
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);

    for (const neighbor of graph.get(current)) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
