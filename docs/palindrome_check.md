---
id: palindromeC
title: Palindrome Check
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```python
def isPalindrome(string):
    reversedString = ""
    for i in reversed(range(len(string))):
        reversedString += string[i]
    return string == reversedString
```

</TabItem>
<TabItem value="s2">

```python
def isPalindrome(string):
    reversedChars = []
    for i in reversed(range(len(string))):
        reversedChars.append(string[i])
    return string == "".join(reversedChars)
```

</TabItem>
<TabItem value="s3">

```python
def isPalindrome(string, i=0):
    j = len(string) - 1 - i
    return True if i >= j else string[i] == string[j] and isPalindrome(string, i + 1)
```

</TabItem>
<TabItem value="s4">

```python
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
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```javascript
function isPalindrome(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s2">

```javascript
function isPalindrome(string) {
  const reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join('');
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s3">

```javascript
function isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s4">

```javascript
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
exports.isPalindrome = isPalindrome;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```typescript
export function isPalindrome(string: string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function isPalindrome(string: string) {
  const reversedChars: string[] = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join('');
}
```

</TabItem>
<TabItem value="s3">

```typescript
export function isPalindrome(string: string, i = 0): boolean {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
```

</TabItem>
<TabItem value="s4">

```typescript
export function isPalindrome(string: string) {
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
</Tabs>

### Java

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static boolean isPalindrome(String str) {
    String reversedString = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      reversedString += str.charAt(i);
    }
    return str.equals(reversedString);
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static boolean isPalindrome(String str) {
    StringBuilder reversedString = new StringBuilder();
    for (int i = str.length() - 1; i >= 0; i--) {
      reversedString.append(str.charAt(i));
    }
    return str.equals(reversedString.toString());
  }
}
```

</TabItem>
<TabItem value="s3">

```java
class Program {
  public static boolean isPalindrome(String str) {
    return isPalindrome(str, 0);
  }
​
  public static boolean isPalindrome(String str, int i) {
    int j = str.length() - 1 - i;
    return i >= j ? true : str.charAt(i) == str.charAt(j) && isPalindrome(str, i + 1);
  }
}
```

</TabItem>
<TabItem value="s4">

```java
class Program {
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
</Tabs>

### C++

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```cpp
using namespace std;
​
bool isPalindrome(string str) {
  string reversedString = "";
  for (int i = str.length() - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return str == reversedString;
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
#include <numeric>
using namespace std;
​
bool isPalindrome(string str) {
  vector<char> reversedChars;
  for (int i = str.length() - 1; i >= 0; i--) {
    reversedChars.push_back(str[i]);
  }
  return str == string(reversedChars.begin(), reversedChars.end());
}
```

</TabItem>
<TabItem value="s3">

```cpp
using namespace std;
​
bool helper(string str, int i);
​
bool isPalindrome(string str) { return helper(str, 0); }
​
bool helper(string str, int i) {
  int j = str.length() - 1 - i;
  return i >= j ? true : str[i] == str[j] && helper(str, i + 1);
}
```

</TabItem>
<TabItem value="s4">

```cpp
using namespace std;
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
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>2</sup>) | O(*n*) |

Where *n* is the length of the input string

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string

</TabItem>
<TabItem value="s3">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string

</TabItem>
<TabItem value="s4">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

Where *n* is the length of the input string

</TabItem>
</Tabs>