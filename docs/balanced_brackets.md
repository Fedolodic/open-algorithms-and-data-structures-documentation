---
id: balancedB
title: Balanced Brackets
---

## Problem

Given a string of brackets, where there are 3 types of brackets: round brackets, "(" and ")", square brackets "[" and "]", and squiggly brackets "{" and "}", write a function that takes in a string of brackets and returns a boolean representing whether or not that string is balanced

A string is said to be balanced if there are as many opening brackets as it has closing brackets, and every opening bracket is correctly matched by an appropriate closing bracket

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

---

## Notes

:::note keep in mind

We're going to be using a stack because we want to keep track of every pair of matching brackets. For every opening bracket, we want to find its corresponding matching closing bracket. More precisely, we want to keep track of the last opening bracket that we've seen

:::

:::tip solution 1

Initialize `openingBrackets`, which is just going to be a string of all the different opening brackets, it could also be an array, and it's basically going to help us check if whatever character we're at when we traverse our string, is an opening bracket. This variable will allow us to ask, is that character included in the string or in this array?

Initialize `closingBrackets`, which is similar to `openingBrackets`

Initialize `matchingBrackets`, which is going to be a Hash Table, or a Python dictionary, or a JavaScript object, that's going to map every closing bracket to its corresponding opening bracket. This is going to allow us to have very clean code so that when we traverse our string, run into a closing bracket, and check if the last value in the stack is the matching opening bracket, we can just check it from the Hash Table

Initialize `stack` to be an empty array

Start traversing our string of brackets. At each character in the string, we'll check if our character is an opening bracket. If it is, then we'll store the character in our stack. If not, then we'll first check if our stack is empty, because if our stack is empty then that means we don't have an opening bracket that we could try to match our current closing bracket to i.e. we know for certain the closing bracket that we're looking at is alone and unmatched and thus our string must be imbalanced, and we must return `False`.

If we do have brackets in our stack, then we'll want to check what the last bracket was. We want to check that the last bracket actually corresponds to the type of the current bracket that we're at, because if the last bracket doesn't correspond to the type of our current closing bracket, then we're also in a situation where our string is imbalanced, and we must return `False`. Otherwise, if the last value in the stack does match the type of our current bracket, then we can pop off the last value off of the stack.

Once we're done iterating through the string, before we return `True` and say that our string is indeed balanced, we need to check that our stack is empty, because if our stack isn't empty then that means we have an opening bracket somewhere in the string that is unmatched

:::