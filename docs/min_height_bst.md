---
id: minHB
title: Min Height BST
---

## Problem

Write a function that constructs a Binary Search Tree, BST, out of a given sorted array of distinct integers, and returns the root of the BST

The function should also minimize the height of the BST

i.e. Create a BST that is as balanced as possible

---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_minHB"
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
  groupId="solutions_minHB"
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
  groupId="solutions_minHB"
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
  groupId="solutions_minHB"
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
  groupId="solutions_minHB"
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
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx, int endIdx);
​
BST *minHeightBst(vector<int> array) {
  return constructMinHeightBst(array, NULL, 0, array.size() - 1);
}
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx, int endIdx) {
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
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx, int endIdx);
​
BST *minHeightBst(vector<int> array) {
  return constructMinHeightBst(array, NULL, 0, array.size() - 1);
}
​
BST *constructMinHeightBst(vector<int> array, BST *bst, int startIdx, int endIdx) {
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
  groupId="solutions_minHB"
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

Inserting a node in a binary tree takes O(log(*n*)) time and we're going to be doing *n* operations in log(*n*) time. Thus, O(*n*log(*n*))

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

---

## Notes

:::note keep in mind

If we want to have roughly same number of nodes in our left substree as in our right subtree, we need to have the same number of nodes that are strictly smaller than our top node as the number of nodes that are greater than or equal to our top node

The fact that our array is in sorted order is really useful, because we know that the value in the middle of our array has roughly the same amount of smaller values as greater values

If the values in our integer array were not distinct, duplicate values, then we could not guarantee that for the middle value in our array all the values to the left would go in the left subtree, and all the values in the right would go in the right subtree 

:::

:::tip solution 1

Find the middle element in our sorted array, and make that value the root node in our BST. Then, all the values to the left of the middle element will be placed in the left subtree of the root node in our BST, and all the values to the right of the middle element will be placed in the right subtree

Next, pick the middle element in the left subarray and make that be the root node of the left subtree in our overall BST, and keep applying the logic on all subarrays for its left subtree and its right subtree. We'll be using recursion in our code

If the subarray is even, pick the leftmost number of both middle numbers

Basically, create a recursive function, `constructMinHeightBst`, that takes in the `array` that we're grabbing values from, the `bst` that we're constructing, the starting indices, `startIdx`, and ending indices, `endIdx`, of the subarray or full array that we're currently looking at. We're going to be calling this recursive function in our main function

In our recursive function, we first handle the base case when we run out of values in a particular subtree, when the starting index gets greater than the ending index, `startIdx > endIdx`. So, if the `startIdx < endIdx` then we've got multiple values that we can keep adding to the `bst`. If `startIdx == endIdx` then we've got one value left in that part of the `bst`. And, if `startIdx > endIdx` then we've reached our base case and we want to break out

Next, grab the middle index between the `startIdx` and `endIdx` bounds. To calculate the middle index, we're just going to add up the `startIdx` and `endIdx` and divide them by 2, `(startIdx + endIdx) // 2`.

Then, we grab the value that we want to add to our `bst`, `valueToAdd = array[midIdx]`.

Then, handle the case where our `bst` is None/Null and create our root node with our value to add, `if bst is None: bst = BST(valueToAdd)`. Or, if we already have a `bst` instance, then simply call the `insert()` method in our that instance, `else: bst.insert(valueToAdd)`

Once we're done inserting a node, then we call our recursive function on the two remaining subarrays on either side of our middle index.

Finally, return our `bst`, which is going to be our root node 

:::

:::tip solution 2

Pass down the current root node of a given subtree in our BST, and manually insert the new node that we're creating without calling the `.insert()` method. This will allow us to have an algorithm that runs in O(*n*) time, because inserting any node with this approach is going to be a constant time operation 

Basically, keep the same logic from the first solution and after we get the middle index, manually create a new bst node at every call to the recursive function, `newBstNode = BST(array[midIdx])`

Then, make the same check `if bst is None`, otherwise set the left or the right value of the `bst` node to be this `newBstNode`.

:::

:::tip solution 3

This solution will be the cleaner version of solution 2

Here, we are not going to be passing in the `bst` in our recursive function. We're going to use the return value of the `constructMinHeightBst` function to construct the entire `bst`. We're also not going to be using the entire if else logic

:::