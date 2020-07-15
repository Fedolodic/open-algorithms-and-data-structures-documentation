---
id: linkedLC
title: Linked List Construction
---

## Code

### Python

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None
​
​
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
​
    def setHead(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insertBefore(self.head, node)
​
    def setTail(self, node):
        if self.tail is None:
            self.setHead(node)
            return
        self.insertAfter(self.tail, node)
​
    def insertBefore(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if node.prev is None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        node.prev = nodeToInsert

    def insertAfter(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if node.next is None:
            self.tail = nodeToInsert
        else:
            node.next.prev = nodeToInsert
        node.next = nodeToInsert
​
    def insertAtPosition(self, position, nodeToInsert):
        if position == 1:
            self.setHead(nodeToInsert)
            return
        node = self.head
        currentPosition = 1
        while node is not None and currentPosition != position:
            node = node.next
            currentPosition += 1
        if node is not None:
            self.insertBefore(node, nodeToInsert)
        else:
            self.setTail(nodeToInsert)

    def removeNodesWithValue(self, value):
        node = self.head
        while node is not None:
            nodeToRemove = node
            node = node.next
            if nodeToRemove.value == value:
                self.remove(nodeToRemove)
​
    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        self.removeNodeBindings(node)
​
    def containsNodeWithValue(self, value):
        node = self.head
        while node is not None and node.value != value:
            node = node.next
        return node is not None
​
    def removeNodeBindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None
```

### JavaScript

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
​
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
​
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
​
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
​
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
​
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
​
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
​
  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
​
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
```

### TypeScript

```typescript
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;
​
  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
​
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
​
  constructor() {
    this.head = null;
    this.tail = null;
  }
​
  setHead(node: Node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
​
  setTail(node: Node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }
​
  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
​
  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
​
  removeNodesWithValue(value: number) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }
​
  remove(node: Node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
​
  containsNodeWithValue(value: number) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
​
  removeNodeBindings(node: Node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
```

### Java

```java
class Program {
  static class DoublyLinkedList {
    public Node head;
    public Node tail;
​
    public void setHead(Node node) {
      if (head == null) {
        head = node;
        tail = node;
        return;
      }
      insertBefore(head, node);
    }
​
    public void setTail(Node node) {
      if (tail == null) {
        setHead(node);
        return;
      }
      insertAfter(tail, node);
    }
​
    public void insertBefore(Node node, Node nodeToInsert) {
      if (nodeToInsert == head && nodeToInsert == tail) return;
      remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if (node.prev == null) {
        head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
    }
​
    public void insertAfter(Node node, Node nodeToInsert) {
      if (nodeToInsert == head && nodeToInsert == tail) return;
      remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      if (node.next == null) {
        tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
​
    public void insertAtPosition(int position, Node nodeToInsert) {
      if (position == 1) {
        setHead(nodeToInsert);
        return;
      }
      Node node = head;
      int currentPosition = 1;
      while (node != null && currentPosition++ != position) node = node.next;
      if (node != null) {
        insertBefore(node, nodeToInsert);
      } else {
        setTail(nodeToInsert);
      }
    }
​
    public void removeNodesWithValue(int value) {
      Node node = head;
      while (node != null) {
        Node nodeToRemove = node;
        node = node.next;
        if (nodeToRemove.value == value) remove(nodeToRemove);
      }
    }
​
    public void remove(Node node) {
      if (node == head) head = head.next;
      if (node == tail) tail = tail.prev;
      removeNodeBindings(node);
    }
​
    public boolean containsNodeWithValue(int value) {
      Node node = head;
      while (node != null && node.value != value) node = node.next;
      return node != null;
    }
​
    public void removeNodeBindings(Node node) {
      if (node.prev != null) node.prev.next = node.next;
      if (node.next != null) node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }
  }
​
  static class Node {
    public int value;
    public Node prev;
    public Node next;
​
    public Node(int value) {
      this.value = value;
    }
  }
}
```

### C++

```cpp
using namespace std;
​
class Node {
public:
  int value;
  Node *prev;
  Node *next;
​
  Node(int value);
};
​
class DoublyLinkedList {
public:
  Node *head;
  Node *tail;
​
  DoublyLinkedList() {
    head = NULL;
    tail = NULL;
  }
​
  void setHead(Node *node) {
    if (head == NULL) {
      head = node;
      tail = node;
      return;
    }
    insertBefore(head, node);
  }
​
  void setTail(Node *node) {
    if (tail == NULL) {
      setHead(node);
      return;
    }
    insertAfter(tail, node);
  }
​
  void insertBefore(Node *node, Node *nodeToInsert) {
    if (nodeToInsert == head && nodeToInsert == tail)
      return;
    remove(nodeToInsert);
    nodeToInsert->prev = node->prev;
    nodeToInsert->next = node;
    if (node->prev == NULL) {
      head = nodeToInsert;
    } else {
      node->prev->next = nodeToInsert;
    }
    node->prev = nodeToInsert;
  }

  void insertAfter(Node *node, Node *nodeToInsert) {
    if (nodeToInsert == head && nodeToInsert == tail)
      return;
    remove(nodeToInsert);
    nodeToInsert->prev = node;
    nodeToInsert->next = node->next;
    if (node->next == NULL) {
      tail = nodeToInsert;
    } else {
      node->next->prev = nodeToInsert;
    }
    node->next = nodeToInsert;
  }
​
  void insertAtPosition(int position, Node *nodeToInsert) {
    if (position == 1) {
      setHead(nodeToInsert);
      return;
    }
    Node *node = head;
    int currentPosition = 1;
    while (node != NULL && currentPosition++ != position)
      node = node->next;
    if (node != NULL) {
      insertBefore(node, nodeToInsert);
    } else {
      setTail(nodeToInsert);
    }
  }
​
  void removeNodesWithValue(int value) {
    Node *node = head;
    while (node != NULL) {
      Node *nodeToRemove = node;
      node = node->next;
      if (nodeToRemove->value == value)
        remove(nodeToRemove);
    }
  }
​
  void remove(Node *node) {
    if (node == head)
      head = head->next;
    if (node == tail)
      tail = tail->prev;
    removeNodeBindings(node);
  }
​
  bool containsNodeWithValue(int value) {
    Node *node = head;
    while (node != NULL && node->value != value)
      node = node->next;
    return node != NULL;
  }
​
  void removeNodeBindings(Node *node) {
    if (node->prev != NULL)
      node->prev->next = node->next;
    if (node->next != NULL)
      node->next->prev = node->prev;
    node->prev = NULL;
    node->next = NULL;
  }
};
```

---

## Space-Time Complexity

setHead(), setTail(), insertBefore(), insertAfter(), and remove():

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(1) | O(1) |

insertAtPosition():

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*p*) | O(1) |

where *p* is the input position

removeNodesWithValue(), containsNodeWithValue():

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

where *n* is the number of nodes in the linked list