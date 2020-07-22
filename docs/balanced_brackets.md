---
id: balancedB
title: Balanced Brackets
---

## Code

### Python

```python
def balancedBrackets(string):
    openingBrackets = "([{"
    closingBrackets = ")]}"
    matchingBrackets = {")": "(", "]": "[", "}": "{"}
    stack = []
    for char in string:
        if char in openingBrackets:
            stack.append(char)
        elif char in closingBrackets:
            if len(stack) == 0:
                return False
            if stack[-1] == matchingBrackets[char]:
                stack.pop()
            else:
                return False
    return len(stack) == 0
```

### JavaScript

```javascript
function balancedBrackets(string) {
  const openingBrackets = '([{';
  const closingBrackets = ')]}';
  const matchingBrackets = {')': '(', ']': '[', '}': '{'};
  const stack = [];
  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
​
exports.balancedBrackets = balancedBrackets;
```

### TypeScript

```typescript
export function balancedBrackets(string: string) {
  const openingBrackets = '([{';
  const closingBrackets = ')]}';
  const matchingBrackets: {[key: string]: string} = {')': '(', ']': '[', '}': '{'};
  const stack: string[] = [];
  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
```

### Java

```java
import java.util.*;
​
class Program {
  public static boolean balancedBrackets(String str) {
    String openingBrackets = "([{";
    String closingBrackets = ")]}";
    Map<Character, Character> matchingBrackets = new HashMap<Character, Character>();
    matchingBrackets.put(')', '(');
    matchingBrackets.put(']', '[');
    matchingBrackets.put('}', '{');
    List<Character> stack = new ArrayList<Character>();
    for (int i = 0; i < str.length(); i++) {
      char letter = str.charAt(i);
      if (openingBrackets.indexOf(letter) != -1) {
        stack.add(letter);
      } else if (closingBrackets.indexOf(letter) != -1) {
        if (stack.size() == 0) {
          return false;
        }
        if (stack.get(stack.size() - 1) == matchingBrackets.get(letter)) {
          stack.remove(stack.size() - 1);
        } else {
          return false;
        }
      }
    }
    return stack.size() == 0;
  }
}
```

### C++

```cpp
#include <vector>
#include <unordered_map>
using namespace std;
​
bool balancedBrackets(string str) {
  string openingBrackets = "([{";
  string closingBrackets = ")]}";
  unordered_map<char, char> matchingBrackets{{')', '('}, {']', '['}, {'}', '{'}};
  vector<char> stack;
  for (char character : str) {
    if (openingBrackets.find(character) != string::npos) {
      stack.push_back(character);
    } else if (closingBrackets.find(character) != string::npos) {
      if (stack.size() == 0) {
        return false;
      }
      if (stack[stack.size() - 1] == matchingBrackets[character]) {
        stack.pop_back();
      } else {
        return false;
      }
    }
  }
  return stack.size() == 0;
}
```

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input array