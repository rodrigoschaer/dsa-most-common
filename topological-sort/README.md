# Topological Sort

Topological Sort is a specific ordering of vertices in a directed graph where for every directed edge from vertex U to vertex V, U comes before V in the ordering. It's applicable only to Directed Acyclic Graphs (DAGs).

When to Use:
- Dependency Resolution: When tasks or events have dependencies on each other and need to be executed in a specific order.
- Scheduling: When scheduling tasks that must be executed in a sequence where each task must follow another.

How to Use:
- Graph Representation: Represent the problem as a directed graph where vertices represent tasks or events, and directed edges represent dependencies.
- Topological Sort Algorithm: Use Kahn's Algorithm (BFS-based) or Depth-First Search (DFS-based) approach.

Why to Use:
- Ordering Requirement: Some problems require a specific order of execution based on dependencies or constraints.
- Cycle Detection: Helps detect cycles in a directed graph (if result length differs from the number of vertices, a cycle exists).
- Efficiency: Kahn's algorithm (BFS-based) runs in `O(V+E)` time complexity, making it efficient for large graphs.
