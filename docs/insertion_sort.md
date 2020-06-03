---
id: insertionS
title: Insertion Sort
---
## Flowchart

![alt text][img]

[img]: /img/Insertion-S-Optimized.png 'Insertion Sort Flowchart!'

---
## Code

### Python

```python
def insertionSort(array):
    for i in range(1, len(array)):
		j = i
		while (j > 0 and array[j] < array[j - 1]):
			swap(j, j - 1, array)
			j -= 1
	return array
			
def swap(i, j, array):
	array[i], array[j] = array[j], array[i]
```

### JavaScript

```javascript
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
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
exports.insertionSort = insertionSort;
```

### Java

```java
class Program {
  public static int[] insertionSort(int[] array) {
    if (array.length == 0) {
      return new int[] {};
    }
    for (int i = 1; i < array.length; i++) {
      int j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        swap(j, j - 1, array);
        j -= 1;
      }
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

vector<int> insertionSort(vector<int> array);

vector<int> insertionSort(vector<int> array) {
  if (array.empty()) {
    return {};
  }
  for (int i = 1; i < array.size(); i++) {
    int j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array[j], array[j - 1]);
      j -= 1;
    }
  }
  return array;
}
```
---


## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Best**| O(*n*) | O(1) |
|**Average**| O(*n*<sup>2</sup>) | O(1) |
|**Worse**| O(*n*<sup>2</sup>) | O(1) |

