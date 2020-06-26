---
id: nthF
title: Nth Fibonacci
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_nthF"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```python
def getNthFib(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
        return getNthFib(n - 1) + getNthFib(n - 2)
```

</TabItem>
<TabItem value="s2">

```python
def getNthFib(n, memoize={1: 0, 2: 1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
        return memoize[n]
```

</TabItem>
<TabItem value="s3">

```python
def getNthFib(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_nthF"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```javascript
function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
​
exports.getNthFib = getNthFib;
```

</TabItem>
<TabItem value="s2">

```javascript
function getNthFib(n, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}
​
exports.getNthFib = getNthFib;
```

</TabItem>
<TabItem value="s3">

```javascript
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
​
exports.getNthFib = getNthFib;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_nthF"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```typescript
export function getNthFib(n: number): number {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function getNthFib(n: number, memoize: Cache = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}
```

</TabItem>
<TabItem value="s3">

```typescript
export function getNthFib(n: number) {
  const lastTwo: [number, number] = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_nthF"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static int getNthFib(int n) {
    if (n == 2) {
      return 1;
    } else if (n == 1) {
      return 0;
    } else {
      return getNthFib(n - 1) + getNthFib(n - 2);
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
  public static int getNthFib(int n) {
    Map<Integer, Integer> memoize = new HashMap<Integer, Integer>();
    memoize.put(1, 0);
    memoize.put(2, 1);
    return getNthFib(n, memoize);
  }
​
  public static int getNthFib(int n, Map<Integer, Integer> memoize) {
    if (memoize.containsKey(n)) {
      return memoize.get(n);
    } else {
      memoize.put(n, getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize));
      return memoize.get(n);
    }
  }
}
```

</TabItem>
<TabItem value="s3">

```java
class Program {
  public static int getNthFib(int n) {
    int[] lastTwo = {0, 1};
    int counter = 3;
    while (counter <= n) {
      int nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_nthF"
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
int getNthFib(int n) {
  if (n == 2) {
    return 1;
  } else if (n == 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <unordered_map>
using namespace std;
​
int getNthFib(int n);
int helper(int n, unordered_map<int, int> memoize);
​
int getNthFib(int n) {
  unordered_map<int, int> memoize({{1, 0}, {2, 1}});
  return helper(n, memoize);
}
​
int helper(int n, unordered_map<int, int> memoize) {
  if (memoize.find(n) != memoize.end()) {
    return memoize[n];
  } else {
    memoize[n] = helper(n - 1, memoize) + helper(n - 2, memoize);
    return memoize[n];
  }
}
```

</TabItem>
<TabItem value="s3">

```cpp
using namespace std;
​
int getNthFib(int n) {
  int lastTwo[] = {0, 1};
  int counter = 3;
  while (counter <= n) {
    int nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_nthF"
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
|**Worse**| O(2<sup>*n*</sup>) | O(*n*) |

Where *n* is the input number

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the input number

</TabItem>
<TabItem value="s3">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

Where *n* is the input number

</TabItem>
</Tabs>