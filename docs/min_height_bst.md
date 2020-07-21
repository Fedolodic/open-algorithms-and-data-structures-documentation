---
id: minHB
title: Min Height BST
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```python
def minHeightBst(array):
    return constructMinHeightBst(array, None, 0, len(array) - 1)
​
​
def constructMinHeightBst(array, bst, startIdx, endIdx):
    if endIdx < startIdx:
        return
    midIdx = (startIdx + endIdx) // 2
    valueToAdd = array[midIdx]
    if bst is None:
        bst = BST(valueToAdd)
    else:
        bst.insert(valueToAdd)
    constructMinHeightBst(array, bst, startIdx, midIdx - 1)
    constructMinHeightBst(array, bst, midIdx + 1, endIdx)
    return bst
​
​
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
​
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
```

</TabItem>
<TabItem value="s2">

```python
def minHeightBst(array):
    return constructMinHeightBst(array, None, 0, len(array) - 1)
​
​
def constructMinHeightBst(array, bst, startIdx, endIdx):
    if endIdx < startIdx:
        return
    midIdx = (startIdx + endIdx) // 2
    newBstNode = BST(array[midIdx])
    if bst is None:
        bst = newBstNode
    else:
        if array[midIdx] < bst.value:
            bst.left = newBstNode
            bst = bst.left
        else:
            bst.right = newBstNode
            bst = bst.right
    constructMinHeightBst(array, bst, startIdx, midIdx - 1)
    constructMinHeightBst(array, bst, midIdx + 1, endIdx)
    return bst
​
​
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

</TabItem>
<TabItem value="s3">

```python
def minHeightBst(array):
    return constructMinHeightBst(array, 0, len(array) - 1)
​
​
def constructMinHeightBst(array, startIdx, endIdx):
    if endIdx < startIdx:
        return None
    midIdx = (startIdx + endIdx) // 2
    bst = BST(array[midIdx])
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1)
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx)
    return bst
​
​
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```javascript
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
​
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
​
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
​
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
​
exports.minHeightBst = minHeightBst;
```

</TabItem>
<TabItem value="s2">

```javascript
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
​
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);
  if (bst === null) {
    bst = newBstNode;
  } else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
​
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
​
exports.minHeightBst = minHeightBst;
```

</TabItem>
<TabItem value="s3">

```javascript
function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
}
​
function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
​
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
​
exports.minHeightBst = minHeightBst;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```typescript
export function minHeightBst(array: number[]) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
​
function constructMinHeightBst(array: number[], bst: BST | null, startIdx: number, endIdx: number) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
​
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
​
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
​
  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function minHeightBst(array: number[]) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
​
function constructMinHeightBst(array: number[], bst: BST | null, startIdx: number, endIdx: number) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);
  if (bst === null) {
    bst = newBstNode;
  } else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
​
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
​
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
```

</TabItem>
<TabItem value="s3">

```typescript
export function minHeightBst(array: number[]) {
  return constructMinHeightBst(array, 0, array.length - 1);
}
​
function constructMinHeightBst(array: number[], startIdx: number, endIdx: number) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
​
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
​
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```java
import java.util.*;
​
class Program {
  public static BST minHeightBst(List<Integer> array) {
    return constructMinHeightBst(array, null, 0, array.size() - 1);
  }
​
  public static BST constructMinHeightBst(List<Integer> array, BST bst, int startIdx, int endIdx) {
    if (endIdx < startIdx) return null;
    int midIdx = (startIdx + endIdx) / 2;
    int valueToAdd = array.get(midIdx);
    if (bst == null) {
      bst = new BST(valueToAdd);
    } else {
      bst.insert(valueToAdd);
    }
    constructMinHeightBst(array, bst, startIdx, midIdx - 1);
    constructMinHeightBst(array, bst, midIdx + 1, endIdx);
    return bst;
  }
​
  static class BST {
    public int value;
    public BST left;
    public BST right;
​
    public BST(int value) {
      this.value = value;
      left = null;
      right = null;
    }
​
    public void insert(int value) {
      if (value < this.value) {
        if (left == null) {
          left = new BST(value);
        } else {
          left.insert(value);
        }
      } else {
        if (right == null) {
          right = new BST(value);
        } else {
          right.insert(value);
        }
      }
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
  public static BST minHeightBst(List<Integer> array) {
    return constructMinHeightBst(array, null, 0, array.size() - 1);
  }
​
  public static BST constructMinHeightBst(List<Integer> array, BST bst, int startIdx, int endIdx) {
    if (endIdx < startIdx) return null;
    int midIdx = (startIdx + endIdx) / 2;
    BST newBstNode = new BST(array.get(midIdx));
    if (bst == null) {
      bst = newBstNode;
    } else {
      if (array.get(midIdx) < bst.value) {
        bst.left = newBstNode;
        bst = bst.left;
      } else {
        bst.right = newBstNode;
        bst = bst.right;
      }
    }
    constructMinHeightBst(array, bst, startIdx, midIdx - 1);
    constructMinHeightBst(array, bst, midIdx + 1, endIdx);
    return bst;
  }
​
  static class BST {
    public int value;
    public BST left;
    public BST right;
​
    public BST(int value) {
      this.value = value;
      left = null;
      right = null;
    }
  }
}
```

</TabItem>
<TabItem value="s3">

```java
import java.util.*;
​
class Program {
  public static BST minHeightBst(List<Integer> array) {
    return constructMinHeightBst(array, 0, array.size() - 1);
  }
​
  public static BST constructMinHeightBst(List<Integer> array, int startIdx, int endIdx) {
    if (endIdx < startIdx) return null;
    int midIdx = (startIdx + endIdx) / 2;
    BST bst = new BST(array.get(midIdx));
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
    return bst;
  }
​
  static class BST {
    public int value;
    public BST left;
    public BST right;
​
    public BST(int value) {
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
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```cpp
using namespace std;
​
class BST {
public:
  int value;
  BST *left;
  BST *right;
​
  BST(int value) {
    this->value = value;
    left = NULL;
    right = NULL;
  }
​
  void insert(int value) {
    if (value < this->value) {
      if (left == NULL) {
        left = new BST(value);
      } else {
        left->insert(value);
      }
    } else {
      if (right == NULL) {
        right = new BST(value);
      } else {
        right->insert(value);
      }
    }
  }
};
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx,
                           int endIdx);
​
BST *minHeightBst(vector<int> array) {
  return constructMinHeightBst(array, NULL, 0, array.size() - 1);
}
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx,
                           int endIdx) {
  if (endIdx < startIdx)
    return NULL;
  int midIdx = (startIdx + endIdx) / 2;
  int valueToAdd = array[midIdx];
  if (bst == NULL) {
    bst = new BST(valueToAdd);
  } else {
    bst->insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
```

</TabItem>
<TabItem value="s2">

```cpp
using namespace std;
​
class BST {
public:
  int value;
  BST *left;
  BST *right;
​
  BST(int value) {
    this->value = value;
    left = NULL;
    right = NULL;
  }
};
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx,
                           int endIdx);
​
BST *minHeightBst(vector<int> array) {
  return constructMinHeightBst(array, NULL, 0, array.size() - 1);
}
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx,
                           int endIdx) {
  if (endIdx < startIdx)
    return NULL;
  int midIdx = (startIdx + endIdx) / 2;
  BST *newBstNode = new BST(array[midIdx]);
  if (bst == NULL) {
    bst = newBstNode;
  } else {
    if (array[midIdx] < bst->value) {
      bst->left = newBstNode;
      bst = bst->left;
    } else {
      bst->right = newBstNode;
      bst = bst->right;
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
```

</TabItem>
<TabItem value="s3">

```cpp
using namespace std;
​
class BST {
public:
  int value;
  BST *left;
  BST *right;
​
  BST(int value) {
    this->value = value;
    left = NULL;
    right = NULL;
  }
};
​
BST *constructMinHeightBst(vector<int> array, int startIdx, int endIdx);
​
BST *minHeightBst(vector<int> array) {
  return constructMinHeightBst(array, 0, array.size() - 1);
}
​
BST *constructMinHeightBst(vector<int> array, int startIdx, int endIdx) {
  if (endIdx < startIdx)
    return NULL;
  int midIdx = (startIdx + endIdx) / 2;
  BST *bst = new BST(array[midIdx]);
  bst->left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst->right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_DOCUMENT_ID"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*log(*n*)) | O(*n*) |

Where *n* is the length of the array

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the array

</TabItem>
<TabItem value="s3">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the array

</TabItem>
</Tabs>