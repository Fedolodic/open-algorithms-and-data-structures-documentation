---
id: findCVIB
title: Find Closest Value In BST
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
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))
​
​
def findClosestValueInBstHelper(tree, target, closest):
    if tree is None:
        return closest
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest
```

</TabItem>
<TabItem value="s2">

```python
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))
​
​
def findClosestValueInBstHelper(tree, target, closest):
    currentNode = tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closest
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
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}
​
function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
​
exports.findClosestValueInBst = findClosestValueInBst;
```

</TabItem>
<TabItem value="s2">

```javascript
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}
​
function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}
​
exports.findClosestValueInBst = findClosestValueInBst;
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
class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    return findClosestValueInBst(tree, target, Double.MAX_VALUE);
  }
​
  public static int findClosestValueInBst(BST tree, int target, double closest) {
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }
    if (target < tree.value && tree.left != null) {
      return findClosestValueInBst(tree.left, target, closest);
    } else if (target > tree.value && tree.right != null) {
      return findClosestValueInBst(tree.right, target, closest);
    } else {
      return (int) closest;
    }
  }
​
  static class BST {
    public int value;
    public BST left;
    public BST right;
​
    public BST(int value) {
      this.value = value;
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    return findClosestValueInBst(tree, target, Double.MAX_VALUE);
  }
​
  public static int findClosestValueInBst(BST tree, int target, double closest) {
    BST currentNode = tree;
    while (currentNode != null) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return (int) closest;
  }
​
  static class BST {
    public int value;
    public BST left;
    public BST right;
​
    public BST(int value) {
      this.value = value;
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
#include <cmath>
#include <float.h>
using namespace std;
​
class BST {
public:
  int value;
  BST *left;
  BST *right;
​
  BST(int val);
  BST &insert(int val);
};
​
int findClosestValueInBst(BST *tree, int target);
int findClosestValueInBstHelper(BST *tree, int target, double closest);
​
int findClosestValueInBst(BST *tree, int target) {
  return findClosestValueInBstHelper(tree, target, DBL_MAX);
}
​
int findClosestValueInBstHelper(BST *tree, int target, double closest) {
  if (abs(target - closest) > abs(target - tree->value)) {
    closest = tree->value;
  }
  if (target < tree->value && tree->left != NULL) {
    return findClosestValueInBstHelper(tree->left, target, closest);
  } else if (target > tree->value && tree->right != NULL) {
    return findClosestValueInBstHelper(tree->right, target, closest);
  } else {
    return (int)closest;
  }
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <cmath>
#include <float.h>
using namespace std;
​
class BST {
public:
  int value;
  BST *left;
  BST *right;
​
  BST(int val);
  BST &insert(int val);
};
​
int findClosestValueInBst(BST *tree, int target);
int findClosestValueInBstHelper(BST *tree, int target, double closest);
​
int findClosestValueInBst(BST *tree, int target) {
  return findClosestValueInBstHelper(tree, target, DBL_MAX);
}
​
int findClosestValueInBstHelper(BST *tree, int target, double closest) {
  BST *currentNode = tree;
  while (currentNode != NULL) {
    if (abs(target - closest) > abs(target - currentNode->value)) {
      closest = currentNode->value;
    }
    if (target < currentNode->value) {
      currentNode = currentNode->left;
    } else if (target > currentNode->value) {
      currentNode = currentNode->right;
    } else {
      break;
    }
  }
  return (int)closest;
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_findCVIB"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Average**| O(log(*n*)) | O(log(*n*)) |
|**Worse**| O(*n*) | O(*n*) |

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Average**| O(log(*n*)) | O(1) |
|**Worse**| O(*n*) | O(1) |

</TabItem>
</Tabs>