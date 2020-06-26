---
id: nodeD
title: Node Depths
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def nodeDepths(root):
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]
    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if node is None:
            continue
        sumOfDepths += depth
        stack.append({"node": node.left, "depth": depth + 1})
        stack.append({"node": node.right, "depth": depth + 1})
    return sumOfDepths
​
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

</TabItem>
<TabItem value="s2">

```python
def nodeDepths(root, depth=0):
    if root is None:
        return 0
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
​
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{node: root, depth: 0}];
  while (stack.length > 0) {
    const {node, depth} = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
​
exports.nodeDepths = nodeDepths;
```

</TabItem>
<TabItem value="s2">

```javascript
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}
​
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
​
exports.nodeDepths = nodeDepths;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function nodeDepths(root: BinaryTree) {
  let sumOfDepths = 0;
  const stack: {node: BinaryTree | null; depth: number}[] = [{node: root, depth: 0}];
  while (stack.length > 0) {
    const {node, depth} = stack.pop()!;
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}
​
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
```

</TabItem>
<TabItem value="s2">

```typescript
export function nodeDepths(root: BinaryTree | null, depth = 0): number {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}
​
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
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
import java.util.*;
​
class Program {
  public static int nodeDepths(BinaryTree root) {
    int sumOfDepths = 0;
    List<Level> stack = new ArrayList<Level>();
    stack.add(new Level(root, 0));
    while (stack.size() > 0) {
      Level top = stack.remove(stack.size() -1);
      BinaryTree node = top.root;
      int depth = top.depth;
      if (node == null) continue;
      sumOfDepths += depth;
      stack.add(new Level(node.left, depth + 1));
      stack.add(new Level(node.right, depth + 1));
    }
    return sumOfDepths;
  }
​
  static class Level {
    public BinaryTree root;
    int depth;
​
    public Level(BinaryTree root, int depth) {
      this.root = root;
      this.depth = depth;
    }
  }
​
  static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;
​
    public BinaryTree(int value) {
      this.value = value;
      left = null;
      right = null;
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```java
import java.util.*;
​
class Program {
  public static int nodeDepths(BinaryTree root) {
    return nodeDepthsHelper(root, 0);
  }
​
  public static int nodeDepthsHelper(BinaryTree root, int depth) {
    if (root == null) return 0;
    return depth + nodeDepthsHelper(root.left, depth + 1) + nodeDepthsHelper(root.right, depth + 1);
  }
​
  static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;
​
    public BinaryTree(int value) {
      this.value = value;
      left = null;
      right = null;
    }
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
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
struct Level {
  BinaryTree *root;
  int depth;
};
​
int nodeDepths(BinaryTree *root) {
  int sumOfDepths = 0;
  vector<Level> stack = {{root, 0}};
  while (stack.size() > 0) {
    BinaryTree *node = stack.back().root;
    int depth = stack.back().depth;
    stack.pop_back();
    if (node == NULL)
      continue;
    sumOfDepths += depth;
    stack.push_back(Level{node->left, depth + 1});
    stack.push_back(Level{node->right, depth + 1});
  }
  return sumOfDepths;
}
```

</TabItem>
<TabItem value="s2">

```cpp
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
int nodeDepths(BinaryTree *root, int depth = 0) {
  if (root == NULL)
    return 0;
  return depth + nodeDepths(root->left, depth + 1) +
         nodeDepths(root->right, depth + 1);
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

When the tree is balanced:

| | Time | Space |
|:---:|:---:|:---:|
|**Average**| O(*n*) | O(*h*) |

Where *n* is the number of nodes in the Binary Tree and *h* is the height of the Binary Tree