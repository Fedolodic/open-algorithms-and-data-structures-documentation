---
id: binaryS
title: Binary Search
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array) - 1)
​
​
def binarySearchHelper(array, target, left, right):
    if left > right:
        return -1
    middle = (left + right) // 2
    potentialMatch = array[middle]
    if target == potentialMatch:
        return middle
    elif target < potentialMatch:
        return binarySearchHelper(array, target, left, middle - 1)
    else:
        return binarySearchHelper(array, target, middle + 1, right)
```

</TabItem>
<TabItem value="s2">

```python
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array) - 1)
​
​
def binarySearchHelper(array, target, left, right):
    while left <= right:
        middle = (left + right) // 2
        potentialMatch = array[middle]
        if target == potentialMatch:
            return middle
        elif target < potentialMatch:
            right = middle - 1
        else:
            left = middle + 1
    return -1
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
​
function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}
​
exports.binarySearch = binarySearch;
```

</TabItem>
<TabItem value="s2">

```javascript
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
​
function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
​
exports.binarySearch = binarySearch;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function binarySearch(array: number[], target: number) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
​
function binarySearchHelper(array: number[], target: number, left: number, right: number): number {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function binarySearch(array: number[], target: number) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
​
function binarySearchHelper(array: number[], target: number, left: number, right: number) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static int binarySearch(int[] array, int target) {
    return binarySearch(array, target, 0, array.length - 1);
  }
​
  public static int binarySearch(int[] array, int target, int left, int right) {
    if (left > right) {
      return -1;
    }
    int middle = (left + right) / 2;
    int potentialMatch = array[middle];
    if (target == potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      return binarySearch(array, target, left, middle - 1);
    } else {
      return binarySearch(array, target, middle + 1, right);
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static int binarySearch(int[] array, int target) {
    return binarySearch(array, target, 0, array.length - 1);
  }
​
  public static int binarySearch(int[] array, int target, int left, int right) {
    while (left <= right) {
      int middle = (left + right) / 2;
      int potentialMatch = array[middle];
      if (target == potentialMatch) {
        return middle;
      } else if (target < potentialMatch) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
#include <vector>
using namespace std;
​
int binarySearch(vector<int> array, int target);
int binarySearchHelper(vector<int> array, int target, int left, int right);
​
int binarySearch(vector<int> array, int target) {
  return binarySearchHelper(array, target, 0, array.size() - 1);
}
​
int binarySearchHelper(vector<int> array, int target, int left, int right) {
  if (left > right) {
    return -1;
  }
  int middle = (left + right) / 2;
  int potentialMatch = array[middle];
  if (target == potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
using namespace std;
​
int binarySearch(vector<int> array, int target);
int binarySearchHelper(vector<int> array, int target, int left, int right);
​
int binarySearch(vector<int> array, int target) {
  return binarySearchHelper(array, target, 0, array.size() - 1);
}
​
int binarySearchHelper(vector<int> array, int target, int left, int right) {
  while (left <= right) {
    int middle = (left + right) / 2;
    int potentialMatch = array[middle];
    if (target == potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_binaryS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(log(*n*)) | O(log(*n*)) |

Where *n* is the length of the input array

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(log(*n*)) | O(1) |

Where *n* is the length of the input array

</TabItem>
</Tabs>