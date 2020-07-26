---
id: levenshteinD
title: Levenshtein Distance
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def levenshteinDistance(str1, str2):
    edits = [[x for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
    for i in range(1, len(str2) + 1):
        edits[i][0] = edits[i - 1][0] + 1
    for i in range(1, len(str2) + 1):
        for j in range(1, len(str1) + 1):
            if str2[i - 1] == str1[j - 1]:
                edits[i][j] = edits[i - 1][j - 1]
            else:
                edits[i][j] = 1 + min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
    return edits[-1][-1]
```

</TabItem>
<TabItem value="s2">

```python
def levenshteinDistance(str1, str2):
    small = str1 if len(str1) < len(str2) else str2
    big = str1 if len(str1) >= len(str2) else str2
    evenEdits = [x for x in range(len(small) + 1)]
    oddEdits = [None for x in range(len(small) + 1)]
    for i in range(1, len(big) + 1):
        if i % 2 == 1:
            currentEdits = oddEdits
            previousEdits = evenEdits
        else:
            currentEdits = evenEdits
            previousEdits = oddEdits
        currentEdits[0] = i
        for j in range(1, len(small) + 1):
            if big[i - 1] == small[j - 1]:
                currentEdits[j] = previousEdits[j - 1]
            else:
                currentEdits[j] = 1 + min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])
    return evenEdits[-1] if len(big) % 2 == 0 else oddEdits[-1]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}
​
exports.levenshteinDistance = levenshteinDistance;
```

</TabItem>
<TabItem value="s2">

```javascript
function levenshteinDistance(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}
​
exports.levenshteinDistance = levenshteinDistance;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function levenshteinDistance(str1: string, str2: string) {
  const edits: number[][] = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
```

</TabItem>
<TabItem value="s2">

```typescript
export function levenshteinDistance(str1: string, str2: string) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits: number[] = [];
  const oddEdits: number[] = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static int levenshteinDistance(String str1, String str2) {
    int[][] edits = new int[str2.length() + 1][str1.length() + 1];
    for (int i = 0; i < str2.length() + 1; i++) {
      for (int j = 0; j < str1.length() + 1; j++) {
        edits[i][j] = j;
      }
      edits[i][0] = i;
    }
    for (int i = 1; i < str2.length() + 1; i++) {
      for (int j = 1; j < str1.length() + 1; j++) {
        if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
          edits[i][j] = edits[i - 1][j - 1];
        } else {
          edits[i][j] =
              1 + Math.min(edits[i - 1][j - 1], Math.min(edits[i - 1][j], edits[i][j - 1]));
        }
      }
    }
    return edits[str2.length()][str1.length()];
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static int levenshteinDistance(String str1, String str2) {
    String small = str1.length() < str2.length() ? str1 : str2;
    String big = str1.length() >= str2.length() ? str1 : str2;
    int[] evenEdits = new int[small.length() + 1];
    int[] oddEdits = new int[small.length() + 1];
    for (int j = 0; j < small.length() + 1; j++) {
      evenEdits[j] = j;
    }
​
    int[] currentEdits;
    int[] previousEdits;
    for (int i = 1; i < big.length() + 1; i++) {
      if (i % 2 == 1) {
        currentEdits = oddEdits;
        previousEdits = evenEdits;
      } else {
        currentEdits = evenEdits;
        previousEdits = oddEdits;
      }
      currentEdits[0] = i;
      for (int j = 1; j < small.length() + 1; j++) {
        if (big.charAt(i - 1) == small.charAt(j - 1)) {
          currentEdits[j] = previousEdits[j - 1];
        } else {
          currentEdits[j] =
              1 + Math.min(previousEdits[j - 1], Math.min(previousEdits[j], currentEdits[j - 1]));
        }
      }
    }
    return big.length() % 2 == 0 ? evenEdits[small.length()] : oddEdits[small.length()];
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
#include <vector>
using namespace std;
​
int levenshteinDistance(string str1, string str2) {
  vector<vector<int>> edits(str2.length() + 1,
                            vector<int>(str1.length() + 1, 0));
  for (int i = 0; i < str2.length() + 1; i++) {
    for (int j = 0; j < str1.length() + 1; j++) {
      edits[i][j] = j;
    }
    edits[i][0] = i;
  }
  for (int i = 1; i < str2.length() + 1; i++) {
    for (int j = 1; j < str1.length() + 1; j++) {
      if (str2[i - 1] == str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
            1 + min(edits[i - 1][j - 1], min(edits[i - 1][j], edits[i][j - 1]));
      }
    }
  }
  return edits[str2.length()][str1.length()];
}
```

</TabItem>
<TabItem value="s2">

```cpp
using namespace std;
​
int levenshteinDistance(string str1, string str2) {
  string small = str1.length() < str2.length() ? str1 : str2;
  string big = str1.length() >= str2.length() ? str1 : str2;
  vector<int> evenEdits(small.length() + 1);
  vector<int> oddEdits(small.length() + 1);
  for (int j = 0; j < small.length() + 1; j++) {
    evenEdits[j] = j;
  }
​
  vector<int> *currentEdits;
  vector<int> *previousEdits;
  for (int i = 1; i < big.length() + 1; i++) {
    if (i % 2 == 1) {
      currentEdits = &oddEdits;
      previousEdits = &evenEdits;
    } else {
      currentEdits = &evenEdits;
      previousEdits = &oddEdits;
    }
​
    (*currentEdits)[0] = i;
    for (int j = 1; j < small.length() + 1; j++) {
      if (big[i - 1] == small[j - 1]) {
        (*currentEdits)[j] = previousEdits->at(j - 1);
      } else {
        (*currentEdits)[j] =
            1 + min(previousEdits->at(j - 1),
                    min(previousEdits->at(j), currentEdits->at(j - 1)));
      }
    }
  }
  return big.length() % 2 == 0 ? evenEdits[small.length()]
                               : oddEdits[small.length()];
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*nm*) | O(*nm*) |

Where *n* and *m* are the lengths of the two input strings

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*nm*) | O(min(*n*, *m*)) |

Where *n* and *m* are the lengths of the two input strings

</TabItem>
</Tabs>