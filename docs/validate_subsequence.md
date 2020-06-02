---
id: validateS
title: Validate Subsequence
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def isValidSubsequence(array, sequence):
    arrIdx = 0
    seqIdx = 0
    while arrIdx < len(array) and seqIdx < len(sequence):
        if array[arrIdx] == sequence[seqIdx]:
            seqIdx += 1
        arrIdx += 1
    return seqIdx == len(sequence)
```

</TabItem>
<TabItem value="s2">

```python
def isValidSubsequence(array, sequence):
    seqIdx = 0
    for value in array:
        if seqIdx == len(sequence):
            break
        if sequence[seqIdx] == value:
            seqIdx += 1
    return seqIdx == len(sequence)
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
​
exports.isValidSubsequence = isValidSubsequence;
```

</TabItem>
<TabItem value="s2">

```javascript
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}
​
exports.isValidSubsequence = isValidSubsequence;
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
import java.util.*;
​
class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
    int arrIdx = 0;
    int seqIdx = 0;
    while (arrIdx < array.size() && seqIdx < sequence.size()) {
      if (array.get(arrIdx) == sequence.get(seqIdx)) {
        seqIdx++;
      }
      arrIdx++;
    }
    return seqIdx == sequence.size();
  }
}
```

</TabItem>
<TabItem value="s2">

```java
import java.util.*;
​
class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
    int seqIdx = 0;
    for (var value : array) {
      if (seqIdx == sequence.size()) {
        break;
      }
      if (sequence.get(seqIdx) == value) {
        seqIdx++;
      }
    }
    return seqIdx == sequence.size();
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
using namespace std;
​
bool isValidSubsequence(vector<int> array, vector<int> sequence) {
  int arrIdx = 0;
  int seqIdx = 0;
  while (arrIdx < array.size() && seqIdx < sequence.size()) {
    if (array[arrIdx] == sequence[seqIdx])
      seqIdx++;
    arrIdx++;
  }
  return seqIdx == sequence.size();
}
```

</TabItem>
<TabItem value="s2">

```cpp
using namespace std;
​
bool isValidSubsequence(vector<int> array, vector<int> sequence) {
  int seqIdx = 0;
  for (auto value : array) {
    if (seqIdx == sequence.size())
      break;
    if (sequence[seqIdx] == value)
      seqIdx++;
  }
  return seqIdx == sequence.size();
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

Where *n* is the length of the array