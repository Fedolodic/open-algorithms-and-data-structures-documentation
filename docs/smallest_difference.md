---
id: smallestD
title: Smallest Difference
---

### Problem

Given two arrays of integer values, find the pair of numbers where one number comes from the first array and another number comes from the second array with the smallest difference 

i.e. Find the two closest numbers of two given arrays

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

Both arrays don't have to have the same length, this is why possibily different length arrays have different variables, *n* and *m*

The reason for this time complexity is because we're sorting both arrays, and if we use an optimal sorting algorithm like Quick Sort or Merge Sort, the time complexity is going to be O(*n*log(*n*)) for the first array and O(*m*log(*m*)) for the second array. Continuing, the actual pointer logic doesn't take much time, we iterate once through all the numbers in total which takes roughly O(*n* + *m*), which doesn't really affect the overall time complexity of sorting the arrays in the beginning

---

### Notes

:::caution naive solution

Use two for loops to generate all the different pairs of numbers that you can using both arrays, calculate their difference, and keep track of the smallest difference

This problem can be solved more optimally using a different algorithm

:::

:::tip solution 1

Sort both arrays in ascending order before we do anything. We're going to be applying a technique that you can use in a lot of other questions related to array manipulation, that takes advantage of the properties of a sorted array to solve the problem

So, we currently have:

*A* ::= {*x* | *x* ∈ 𝕫 and *x*<sub>1</sub> ≤ *x*<sub>2</sub> ≤ ... ≤ *x*<sub>n</sub>}

*B* ::= {*y* | *y* ∈ 𝕫 and *y*<sub>1</sub> ≤ *y*<sub>2</sub> ≤ ... ≤ *y*<sub>n</sub>}

If *x* = *y*, then that means that this pair is our smallest, this is the pair we'll want to return, because they're going to have the smallest difference of zero

If *x* < *y*, we'll want to compute their current difference and if this is the smallest difference we have thus far, update the smallest difference with the current difference. Then, we'll want to increment *x* or decrement *y* to bring both pairs of numbers closer and closer to each other

Notice that because our arrays are sorted we know that *x*<sub>*n*-k</sub> ≤ *x*<sub>*n*</sub>, so we shouldn't look at any element before of our current *x*, because if we do those differences will be greater than the difference that we currently have, which is not what we want. Similarly, we also know that *y*<sub>*n*</sub> ≤ *y*<sub>*n*+k</sub>, so we shouldn't look at any element after our current *y*, because if we do those differences will again be greater than the difference we currently have

If *x* > *y*, we'll want to compute their current difference and if this is the smallest difference we have thus far, update the smallest difference with the current difference. Then, we'll want to increment *y* or decrement *x* to again bring both pairs of numbers closer and closer to each other

:::