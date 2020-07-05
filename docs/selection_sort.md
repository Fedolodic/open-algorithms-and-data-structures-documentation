---
id: selectionS
title: Selection Sort
---

## Code

### Python

```python
def selectionSort(array):
    currentIdx = 0
    while currentIdx < len(array) - 1:
        smallestIdx = currentIdx
        for i in range(currentIdx + 1, len(array)):
            if array[smallestIdx] > array[i]:
                smallestIdx = i
        swap(currentIdx, smallestIdx, array)
        currentIdx += 1
    return array
​
​
def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
```

### JavaScript

```javascript
function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}
​
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
​
exports.selectionSort = selectionSort;
```

### TypeScript

```typescript
export function selectionSort(array: number[]) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}
​
function swap(i: number, j: number, array: number[]) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
```

### Java

```java
class Program {
  public static int[] selectionSort(int[] array) {
    if (array.length == 0) {
      return new int[] {};
    }
    int startIdx = 0;
    while (startIdx < array.length - 1) {
      int smallestIdx = startIdx;
      for (int i = startIdx + 1; i < array.length; i++) {
        if (array[smallestIdx] > array[i]) {
          smallestIdx = i;
        }
      }
      swap(startIdx, smallestIdx, array);
      startIdx++;
    }
    return array;
  }
​
  public static void swap(int i, int j, int[] array) {
    int temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
}
```

### C++

```cpp
#include <vector>
using namespace std;
​
vector<int> selectionSort(vector<int> array);
​
vector<int> selectionSort(vector<int> array) {
  if (array.empty()) {
    return {};
  }
  int startIdx = 0;
  while (startIdx < array.size() - 1) {
    int smallestIdx = startIdx;
    for (int i = startIdx + 1; i < array.size(); i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    swap(array[startIdx], array[smallestIdx]);
    startIdx++;
  }
  return array;
}
```

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Best**| O(*n*<sup>2</sup>) | O(1) |
|**Average**| O(*n*<sup>2</sup>) | O(1) |
|**Worse**| O(*n*<sup>2</sup>) | O(1) |

Where *n* is the length of the input array