import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lru-catch',
  templateUrl: './lru-catch.component.html',
  styleUrls: ['./lru-catch.component.css']
})
export class LRUCatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 exp1=
 `
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 `;
 snippet=
 `
 class Node{
  public:
      int key;
      int value;
      Node* prev;
      Node* next;
      Node(int k,int v) : key(k), value(v) {
          prev = NULL;
          next = NULL;
      }
  };
  
  
  class LRUCache {
      
      int capacity, count;
      Node *head, *tail;
      map<int, Node*> position;
      
      // adds node to head
      void addToHead(Node* node) {
          node->prev = head;
          node->next = head->next;
          head->next->prev = node;
          head->next = node;
      }
      
      // removes node
      void removeNode(Node* node) {
          Node* behind = node->prev;
          Node* ahead = node->next;
          behind->next = ahead;
          ahead->prev = behind;
      }
      
      // moves node to head
      void moveToHead(Node* node) {
          removeNode(node);
          addToHead(node);
      }
      
      // pops tail  
      Node* popTail() {
          Node* last =  tail->prev;
          removeNode(last);
          return last;
      }
      
      
  public:
      // initializing
      LRUCache(int capacity) {
          count = 0;
          this->capacity = capacity;
          head = new Node(-1, -1);
          tail = new Node(-1, -1);
          head->next = tail;
          tail->prev = head;
      }
      
      int get(int key) {
          if(position.count(key) == 0) return -1;   // key not valid as not present
          Node* node = position[key];
          moveToHead(node);
          return node->value;
      }
      
      void put(int key, int value) {
          if(position.count(key)) {                 // existing key
              Node* node = position[key];
              node->value = value;
              moveToHead(node);
          } else {                                  // new key
              Node* node = new Node(key, value);
              addToHead(node);
              position[key] = node;
              count++;
              if(count > capacity) {                // if capacity is excided pop tail
                  Node* removedNode = popTail();
                  position.erase(removedNode->key);
                  delete(removedNode);
                  count--;
              }
          }
      }
  };
 `;
}
