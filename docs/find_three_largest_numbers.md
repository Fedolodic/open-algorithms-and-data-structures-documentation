---
id: findTLN
title: Find Three Largest Numbers
---

## Code

### Python

```python
def findThreeLargestNumbers(array):
    threeLargest = [None, None, None]
    for num in array:
        updateLargest(threeLargest, num)
    return threeLargest
​
​
def updateLargest(threeLargest, num):
    if threeLargest[2] is None or num > threeLargest[2]:
        shiftAndUpdate(threeLargest, num, 2)
    elif threeLargest[1] is None or num > threeLargest[1]:
        shiftAndUpdate(threeLargest, num, 1)
    elif threeLargest[0] is None or num > threeLargest[0]:
        shiftAndUpdate(threeLargest, num, 0)
​
​
def shiftAndUpdate(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i + 1]
```

### JavaScript

```javascript
function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}
​
function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}
​
function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
​
exports.findThreeLargestNumbers = findThreeLargestNumbers;
```

### TypeScript

```typescript
export function findThreeLargestNumbers(array: number[]) {
  const threeLargest: Array<number | null> = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}
​
function updateLargest(threeLargest: Array<number | null>, num: number) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}
​
function shiftAndUpdate(array: Array<number | null>, num: number, idx: number) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
```

### Java

```java
class Program {
  public static int[] findThreeLargestNumbers(int[] array) {
    int[] threeLargest = {Integer.MIN_VALUE, Integer.MIN_VALUE, Integer.MIN_VALUE};
    for (int num : array) {
      updateLargest(threeLargest, num);
    }
    return threeLargest;
  }
​
  public static void updateLargest(int[] threeLargest, int num) {
    if (num > threeLargest[2]) {
      shiftAndUpdate(threeLargest, num, 2);
    } else if (num > threeLargest[1]) {
      shiftAndUpdate(threeLargest, num, 1);
    } else if (num > threeLargest[0]) {
      shiftAndUpdate(threeLargest, num, 0);
    }
  }
​
  public static void shiftAndUpdate(int[] array, int num, int idx) {
    for (int i = 0; i <= idx; i++) {
      if (i == idx) {
        array[i] = num;
      } else {
        array[i] = array[i + 1];
      }
    }
  }
}
```

### C++

```cpp
#include <vector>
#include <climits>
using namespace std;
​
vector<int> findThreeLargestNumbers(vector<int> array);
void updateLargest(vector<int> *threeLargest, int num);
void shiftAndUpdate(vector<int> *largest, int num, int idx);
​
vector<int> findThreeLargestNumbers(vector<int> array) {
  vector<int> threeLargest{INT_MIN, INT_MIN, INT_MIN};
  for (int num : array) {
    updateLargest(&threeLargest, num);
  }
  return threeLargest;
}
​
void updateLargest(vector<int> *threeLargest, int num) {
  if (num > threeLargest->at(2)) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (num > threeLargest->at(1)) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (num > threeLargest->at(0)) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}
​
void shiftAndUpdate(vector<int> *array, int num, int idx) {
  for (int i = 0; i <= idx; i++) {
    if (i == idx) {
      array->at(i) = num;
    } else {
      array->at(i) = array->at(i + 1);
    }
  }
}
```

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

Where *n* is the length of the input array