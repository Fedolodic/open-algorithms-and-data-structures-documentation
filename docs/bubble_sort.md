---
id: bubbleS
title: Bubble Sort
---

## Code

### Python

```python
def bubbleSort(array):
    isSorted = False
    counter = 0
    while not isSorted:
        isSorted = True
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                swap(i, i + 1, array)
                isSorted = False
        counter += 1
    return array
​
​
def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
```

### JavaScript

```javascript
function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
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
exports.bubbleSort = bubbleSort;
```

### TypeScript

```typescript
export function bubbleSort(array: number[]) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
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
  public static int[] bubbleSort(int[] array) {
    if (array.length == 0) {
      return new int[] {};
    }
    boolean isSorted = false;
    int counter = 0;
    while (!isSorted) {
      isSorted = true;
      for (int i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          swap(i, i + 1, array);
          isSorted = false;
        }
      }
      counter++;
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
vector<int> bubbleSort(vector<int> array);
​
vector<int> bubbleSort(vector<int> array) {
  if (array.empty()) {
    return {};
  }
  bool isSorted = false;
  int counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (int i = 0; i < array.size() - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array[i], array[i + 1]);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}
```

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Best**| O(*n*) | O(1) |
|**Average**| O(*n*<sup>2</sup>) | O(1) |
|**Worse**| O(*n*<sup>2</sup>) | O(1) |

where *n* is the length of the input array