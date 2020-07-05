---
id: productS
title: Product Sum
---

## Code

### Python

```python
def productSum(array, multiplier=1):
    sum = 0
    for element in array:
        if type(element) is list:
            sum += productSum(element, multiplier + 1)
        else:
            sum += element
    return sum * multiplier
```

### JavaScript

```javascript
function productSum(array, multiplier = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}
​
exports.productSum = productSum;
```

### TypeScript

```typescript
type SpecialArray = Array<number | SpecialArray>;

export function productSum(array: SpecialArray, multiplier = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}
```

### Java

```java
import java.util.*;
​
class Program {
  public static int productSum(List<Object> array) {
    return productSumHelper(array, 1);
  }
​
  public static int productSumHelper(List<Object> array, int multiplier) {
    int sum = 0;
    for (Object el : array) {
      if (el instanceof ArrayList) {
        @SuppressWarnings("unchecked")
        ArrayList<Object> ls = (ArrayList<Object>) el;
        sum += productSumHelper(ls, multiplier + 1);
      } else {
        sum += (int) el;
      }
    }
    return sum * multiplier;
  }
}
```

### C++

```cpp
#include <any>
#include <vector>
​
using namespace std;
​
int productSum(vector<any> array, int multiplier = 1) {
  int sum = 0;
  for (auto el : array) {
    if (el.type() == typeid(vector<any>)) {
      sum += productSum(any_cast<vector<any>>(el), multiplier + 1);
    } else {
      sum += any_cast<int>(el);
    }
  }
  return sum * multiplier;
}
```

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*d*) |

Where *n* is the total number of elements in the array, including sub-elements, and *d* is the greatest depth of "special" arrays in the array