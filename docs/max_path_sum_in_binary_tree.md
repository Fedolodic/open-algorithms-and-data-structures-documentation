---
id: maxPSIBT
title: Max Path Sum In Binary Tree
---

## Code

### Python

```python
def maxPathSum(tree):
    _, maxSum = findMaxSum(tree)
    return maxSum
​
​
def findMaxSum(tree):
    if tree is None:
        return (0, float("-inf"))
​
    leftMaxSumAsBranch, leftMaxPathSum = findMaxSum(tree.left)
    rightMaxSumAsBranch, rightMaxPathSum = findMaxSum(tree.right)
    maxChildSumAsBranch = max(leftMaxSumAsBranch, rightMaxSumAsBranch)
​
    value = tree.value
    maxSumAsBranch = max(maxChildSumAsBranch + value, value)
    maxSumAsRootNode = max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch)
    maxPathSum = max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)
​
    return (maxSumAsBranch, maxPathSum)
```

### JavaScript

```javascript
function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}
​
function findMaxSum(tree) {
  if (tree === null) return [0, -Infinity];
​
  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
​
  const {value} = tree;
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);
​
  return [maxSumAsBranch, maxPathSum];
}
​
exports.maxPathSum = maxPathSum;
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
export function maxPathSum(tree: BinaryTree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}
​
function findMaxSum(tree: BinaryTree | null) {
  if (tree === null) return [0, -Infinity];
​
  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
​
  const {value} = tree;
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);
​
  return [maxSumAsBranch, maxPathSum];
}
```

### Java

```java
import java.util.*;
​
class Program {
  public static int maxPathSum(BinaryTree tree) {
    List<Integer> maxSumArray = findMaxSum(tree);
    return maxSumArray.get(1);
  }
​
  public static List<Integer> findMaxSum(BinaryTree tree) {
    if (tree == null) {
      return new ArrayList<Integer>(Arrays.asList(0, Integer.MIN_VALUE));
    }
    List<Integer> leftMaxSumArray = findMaxSum(tree.left);
    Integer leftMaxSumAsBranch = leftMaxSumArray.get(0);
    Integer leftMaxPathSum = leftMaxSumArray.get(1);
​
    List<Integer> rightMaxSumArray = findMaxSum(tree.right);
    Integer rightMaxSumAsBranch = rightMaxSumArray.get(0);
    Integer rightMaxPathSum = rightMaxSumArray.get(1);
​
    Integer maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
    Integer maxSumAsBranch = Math.max(maxChildSumAsBranch + tree.value, tree.value);
    Integer maxSumAsRootNode =
        Math.max(leftMaxSumAsBranch + tree.value + rightMaxSumAsBranch, maxSumAsBranch);
    int maxPathSum = Math.max(leftMaxPathSum, Math.max(rightMaxPathSum, maxSumAsRootNode));
​
    return new ArrayList<Integer>(Arrays.asList(maxSumAsBranch, maxPathSum));
  }
​
  static class BinaryTree {
    public int value;
    public BinaryTree left;
    public BinaryTree right;
​
    public BinaryTree(int value) {
      this.value = value;
    }
  }
}
```

### C++

```cpp
#include <vector>
using namespace std;
​
class BinaryTree {
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;
​
  BinaryTree(int value);
  void insert(vector<int> values, int i = 0);
};
​
vector<int> findMaxSum(BinaryTree *tree);
​
int maxPathSum(BinaryTree tree) {
  vector<int> maxSumArray = findMaxSum(&tree);
  return maxSumArray[1];
}
​
vector<int> findMaxSum(BinaryTree *tree) {
  if (tree == NULL) {
    return vector<int>{0, INT_MIN};
  }
​
  vector<int> leftMaxSumArray = findMaxSum(tree->left);
  int leftMaxSumAsBranch = leftMaxSumArray[0];
  int leftMaxPathSum = leftMaxSumArray[1];
​
  vector<int> rightMaxSumArray = findMaxSum(tree->right);
  int rightMaxSumAsBranch = rightMaxSumArray[0];
  int rightMaxPathSum = rightMaxSumArray[1];
​
  int maxChildSumAsBranch = max(leftMaxSumAsBranch, rightMaxSumAsBranch);
  int maxSumAsBranch = max(maxChildSumAsBranch + tree->value, tree->value);
  int maxSumAsRootNode = max(
      leftMaxSumAsBranch + tree->value + rightMaxSumAsBranch, maxSumAsBranch);
  int maxPathSum = max(leftMaxPathSum, max(rightMaxPathSum, maxSumAsRootNode));
​
  return vector<int>{maxSumAsBranch, maxPathSum};
}
```

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(log(*n*)) |

Where *n* is the number of nodes in the Binary Tree