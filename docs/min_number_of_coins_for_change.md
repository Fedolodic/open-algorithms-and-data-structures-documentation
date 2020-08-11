---
id: minNOCFC
title: Min Number Of Coins For Change
---

## Code

### Python

```python
def minNumberOfCoinsForChange(n, denoms):
    numOfCoins = [float("inf") for amount in range(n + 1)]
    numOfCoins[0] = 0
    for denom in denoms:
        for amount in range(len(numOfCoins)):
            if denom <= amount:
                numOfCoins[amount] = min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
    return numOfCoins[n] if numOfCoins[n] != float("inf") else -1
```

### JavaScript

```javascript
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
```

### TypeScript

```typescript
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numOfCoins: number[] = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
```

### Java

```java
import java.util.Arrays;

class Program {
  public static int minNumberOfCoinsForChange(int n, int[] denoms) {
    int[] numOfCoins = new int[n + 1];
    Arrays.fill(numOfCoins, Integer.MAX_VALUE);
    numOfCoins[0] = 0;
    int toCompare = 0;
    for (int denom : denoms) {
      for (int amount = 0; amount < numOfCoins.length; amount++) {
        if (denom <= amount) {
          if (numOfCoins[amount - denom] == Integer.MAX_VALUE) {
            toCompare = numOfCoins[amount - denom];
          } else {
            toCompare = numOfCoins[amount - denom] + 1;
          }
          numOfCoins[amount] = Math.min(numOfCoins[amount], toCompare);
        }
      }
    }
    return numOfCoins[n] != Integer.MAX_VALUE ? numOfCoins[n] : -1;
  }
}
```

### C++

```cpp
#include <vector>
#include <climits>
using namespace std;

int minNumberOfCoinsForChange(int n, vector<int> denoms) {
  vector<int> numOfCoins(n + 1, INT_MAX);
  numOfCoins[0] = 0;
  int toCompare = 0;
  for (int denom : denoms) {
    for (int amount = 0; amount < numOfCoins.size(); amount++) {
      if (denom <= amount) {
        if (numOfCoins[amount - denom] == INT_MAX) {
          toCompare = numOfCoins[amount - denom];
        } else {
          toCompare = numOfCoins[amount - denom] + 1;
        }
        numOfCoins[amount] = min(numOfCoins[amount], toCompare);
      }
    }
  }
  return numOfCoins[n] != INT_MAX ? numOfCoins[n] : -1;
}
```

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*nd*) | O(*n*) |

Where *n* is the target amount and *d* is the number of coin denominations