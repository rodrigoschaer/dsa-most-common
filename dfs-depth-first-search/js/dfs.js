function dfs(node, result = []) {
  if (!node) return;

  result.push(node.val);
  for (const child of node.children) {
    dfs(child, result);
  }

  return result;
}

// DFS inorder traversal
function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// DFS preorder traversal
function preorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// DFS postorder traversal
function postorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }
  traverse(root);
  return result;
}
