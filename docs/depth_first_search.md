---
id: depthFS
title: Depth-first Search
---

## Code

### Python

```python
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name
​
    def addChild(self, name):
        self.children.append(Node(name))
        return self
​
    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array
```

### JavaScript

```javascript
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
​
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
​
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
​
exports.Node = Node;
```

### TypeScript

```typescript
export class Node {
  name: string;
  children: Node[];
​
  constructor(name: string) {
    this.name = name;
    this.children = [];
  }
​
  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }
​
  depthFirstSearch(array: string[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
```

### Java

```java
import java.util.*;
​
class Program {
  static class Node {
    String name;
    List<Node> children = new ArrayList<Node>();
​
    public Node(String name) {
      this.name = name;
    }
​
    public List<String> depthFirstSearch(List<String> array) {
      array.add(this.name);
      for (int i = 0; i < children.size(); i++) {
        children.get(i).depthFirstSearch(array);
      }
      return array;
    }
​
    public Node addChild(String name) {
      Node child = new Node(name);
      children.add(child);
      return this;
    }
  }
}
```

### C++

```cpp
#include <vector>
using namespace std;
​
class Node {
public:
  string name;
  vector<Node *> children;
​
  Node(string name) { this->name = name; }
​
  vector<string> depthFirstSearch(vector<string> *array) {
    array->push_back(this->name);
    for (int i = 0; i < this->children.size(); i++) {
      children[i]->depthFirstSearch(array);
    }
    return *array;
  }
​
  Node *addChild(string name) {
    Node *child = new Node(name);
    children.push_back(child);
    return this;
  }
};
```

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*v* + *e*) | O(*v*) |

Where *v* is the number of vertices of the input graph and *e* is the number of edges of the input graph