---
id: smallestD
title: Smallest Difference
---

## Code

### Python

```python
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    idxOne = 0
    idxTwo = 0
    smallest = float("inf")
    current = float("inf")
    smallestPair = []
    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        firstNum = arrayOne[idxOne]
        secondNum = arrayTwo[idxTwo]
        if firstNum < secondNum:
            current = secondNum - firstNum
            idxOne += 1
        elif secondNum < firstNum:
            current = firstNum - secondNum
            idxTwo += 1
        else:
            return [firstNum, secondNum]
        if smallest > current:
            smallest = current
            smallestPair = [firstNum, secondNum]
    return smallestPair
```

### JavaScript

```javascript
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
​
exports.smallestDifference = smallestDifference;
```

### TypeScript

```typescript
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair: number[] = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
```

### Java

```java
import java.util.Arrays;
​
class Program {
  public static int[] smallestDifference(int[] arrayOne, int[] arrayTwo) {
    Arrays.sort(arrayOne);
    Arrays.sort(arrayTwo);
    int idxOne = 0;
    int idxTwo = 0;
    int smallest = Integer.MAX_VALUE;
    int current = Integer.MAX_VALUE;
    int[] smallestPair = new int[2];
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
      int firstNum = arrayOne[idxOne];
      int secondNum = arrayTwo[idxTwo];
      if (firstNum < secondNum) {
        current = secondNum - firstNum;
        idxOne++;
      } else if (secondNum < firstNum) {
        current = firstNum - secondNum;
        idxTwo++;
      } else {
        return new int[] {firstNum, secondNum};
      }
      if (smallest > current) {
        smallest = current;
        smallestPair = new int[] {firstNum, secondNum};
      }
    }
    return smallestPair;
  }
}
```

### C++

```cpp
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;
​
vector<int> smallestDifference(vector<int> arrayOne, vector<int> arrayTwo) {
  sort(arrayOne.begin(), arrayOne.end());
  sort(arrayTwo.begin(), arrayTwo.end());
  int idxOne = 0;
  int idxTwo = 0;
  int smallest = INT_MAX;
  int current = INT_MAX;
  vector<int> smallestPair;
  while (idxOne < arrayOne.size() && idxTwo < arrayTwo.size()) {
    int firstNum = arrayOne[idxOne];
    int secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return vector<int>{firstNum, secondNum};
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = {firstNum, secondNum};
    }
  }
  return smallestPair;
}
```

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*log(*n*) + *m*log(*m*)) | O(1) |

Where *n* is the length of the first input array and *m* is the length of the second input array