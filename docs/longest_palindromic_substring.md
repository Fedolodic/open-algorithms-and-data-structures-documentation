---
id: longestPS
title: Longest Palindromic Substring
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def longestPalindromicSubstring(string):
    longest = ""
    for i in range(len(string)):
        for j in range(i, len(string)):
            substring = string[i : j + 1]
            if len(substring) > len(longest) and isPalindrome(substring):
                longest = substring
    return longest
​
​
def isPalindrome(string):
    leftIdx = 0
    rightIdx = len(string) - 1
    while leftIdx < rightIdx:
        if string[leftIdx] != string[rightIdx]:
            return False
        leftIdx += 1
        rightIdx -= 1
    return True
```

</TabItem>
<TabItem value="s2">

```python
def longestPalindromicSubstring(string):
    currentLongest = [0, 1]
    for i in range(1, len(string)):
        odd = getLongestPalindromeFrom(string, i - 1, i + 1)
        even = getLongestPalindromeFrom(string, i - 1, i)
        longest = max(odd, even, key=lambda x: x[1] - x[0])
        currentLongest = max(longest, currentLongest, key=lambda x: x[1] - x[0])
    return string[currentLongest[0] : currentLongest[1]]
​
​
def getLongestPalindromeFrom(string, leftIdx, rightIdx):
    while leftIdx >= 0 and rightIdx < len(string):
        if string[leftIdx] != string[rightIdx]:
            break
        leftIdx -= 1
        rightIdx += 1
    return [leftIdx + 1, rightIdx]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function longestPalindromicSubstring(string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
​
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
​
exports.longestPalindromicSubstring = longestPalindromicSubstring;
```

</TabItem>
<TabItem value="s2">

```javascript
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
​
function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
​
exports.longestPalindromicSubstring = longestPalindromicSubstring;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function longestPalindromicSubstring(string: string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
​
function isPalindrome(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function longestPalindromicSubstring(string: string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
​
function getLongestPalindromeFrom(string: string, leftIdx: number, rightIdx: number) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static String longestPalindromicSubstring(String str) {
    String longest = "";
    for (int i = 0; i < str.length(); i++) {
      for (int j = i; j < str.length(); j++) {
        String substring = str.substring(i, j + 1);
        if (substring.length() > longest.length() && isPalindrome(substring)) {
          longest = substring;
        }
      }
    }
    return longest;
  }
​
  public static boolean isPalindrome(String str) {
    int leftIdx = 0;
    int rightIdx = str.length() - 1;
    while (leftIdx < rightIdx) {
      if (str.charAt(leftIdx) != str.charAt(rightIdx)) {
        return false;
      }
      leftIdx++;
      rightIdx--;
    }
    return true;
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static String longestPalindromicSubstring(String str) {
    int[] currentLongest = {0, 1};
    for (int i = 1; i < str.length(); i++) {
      int[] odd = getLongestPalindromeFrom(str, i - 1, i + 1);
      int[] even = getLongestPalindromeFrom(str, i - 1, i);
      int[] longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      currentLongest =
          currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
              ? currentLongest
              : longest;
    }
    return str.substring(currentLongest[0], currentLongest[1]);
  }
​
  public static int[] getLongestPalindromeFrom(String str, int leftIdx, int rightIdx) {
    while (leftIdx >= 0 && rightIdx < str.length()) {
      if (str.charAt(leftIdx) != str.charAt(rightIdx)) {
        break;
      }
      leftIdx--;
      rightIdx++;
    }
    return new int[] {leftIdx + 1, rightIdx};
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_longestPS"
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
bool isPalindrome(string str);
​
string longestPalindromicSubstring(string str) {
  string longest = "";
  for (int i = 0; i < str.length(); i++) {
    for (int j = i; j < str.length(); j++) {
      string substring = str.substr(i, j + 1 - i);
      if (substring.length() > longest.length() && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
​
bool isPalindrome(string str) {
  int leftIdx = 0;
  int rightIdx = str.length() - 1;
  while (leftIdx < rightIdx) {
    if (str[leftIdx] != str[rightIdx]) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
using namespace std;
​
vector<int> getLongestPalindromeFrom(string str, int leftIdx, int rightIdx);
​
string longestPalindromicSubstring(string str) {
  vector<int> currentLongest{0, 1};
  for (int i = 1; i < str.length(); i++) {
    vector<int> odd = getLongestPalindromeFrom(str, i - 1, i + 1);
    vector<int> even = getLongestPalindromeFrom(str, i - 1, i);
    vector<int> longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
        currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
            ? currentLongest
            : longest;
  }
  return str.substr(currentLongest[0], currentLongest[1] - currentLongest[0]);
}
​
vector<int> getLongestPalindromeFrom(string str, int leftIdx, int rightIdx) {
  while (leftIdx >= 0 && rightIdx < str.length()) {
    if (str[leftIdx] != str[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }
  return vector<int>{leftIdx + 1, rightIdx};
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>3</sup>) | O(1) |

Where *n* is the length of the input string

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>2</sup>) | O(1) |

Where *n* is the length of the input string

</TabItem>
</Tabs>