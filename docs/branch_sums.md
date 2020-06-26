---
id: branchS
title: Branch Sums
---

## Code

### Python

```python
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
​

def branchSums(root):
    sums = []
    calculateBranchSums(root, 0, sums)
    return sums
​
​
def calculateBranchSums(node, runningSum, sums):
    if node is None:
        return
​
    newRunningSum = runningSum + node.value
    if node.left is None and node.right is None:
        sums.append(newRunningSum)
        return
​
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)
```

### JavaScript

```javascript
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
​
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}
​
function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;
​
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
​
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}
​
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
```

### TypeScript

```typescript
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
​
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
​
export function branchSums(root: BinaryTree) {
  const sums: number[] = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}
​
function calculateBranchSums(node: BinaryTree | null, runningSum: number, sums: number[]) {
  if (!node) return;
​
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
​
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}
```

### Java

```java
import java.util.*;
​
class Program {
  public static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;
​
    BinaryTree(int value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
​
  public static List<Integer> branchSums(BinaryTree root) {
    List<Integer> sums = new ArrayList<Integer>();
    calculateBranchSums(root, 0, sums);
    return sums;
  }
​
  public static void calculateBranchSums(BinaryTree node, int runningSum, List<Integer> sums) {
    if (node == null) return;
​
    int newRunningSum = runningSum + node.value;
    if (node.left == null && node.right == null) {
      sums.add(newRunningSum);
      return;
    }
​
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
  }
}
```

### C++

```cpp
#include <vector>
​
using namespace std;
​
class BinaryTree {
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;
​
  BinaryTree(int value) {
    this->value = value;
    left = NULL;
    right = NULL;
  }
};
​
void calculateBranchSums(BinaryTree *node, int runningSum, vector<int> &sums);
​
vector<int> branchSums(BinaryTree *root) {
  vector<int> sums;
  calculateBranchSums(root, 0, sums);
  return sums;
}
​
void calculateBranchSums(BinaryTree *node, int runningSum, vector<int> &sums) {
  if (node == NULL)
    return;
​
  int newRunningSum = runningSum + node->value;
  if (node->left == NULL && node->right == NULL) {
    sums.push_back(newRunningSum);
    return;
  }
​
  calculateBranchSums(node->left, newRunningSum, sums);
  calculateBranchSums(node->right, newRunningSum, sums);
}
```
---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the number of nodes in the Binary Tree