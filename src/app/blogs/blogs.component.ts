import { Component, OnInit } from '@angular/core';
import { blg } from '../blg.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blog: blg ={id:null,topicname:[],name:"",desc:"",rlink:""};
  bloglist: blg[]=[
    {id:101,topicname:["linkedlist"],name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycleinalinkedlist"},
    {id:102,topicname:["Matrix","Array","Maths"],name:"Rotate Matrix",desc:"You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",rlink:"rotatematrix"},
    {id:103,topicname:["Matrix","Array","Simulation"],name:"Spiral Matrix II",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"spiralmatrixII"},
    {id:104,topicname:["string"],name:"Introduction To Strings",desc:"Strings are objects that represent sequences of characters.The standard string class provides support for such objects with an interface similar to that of a standard container of",rlink:"stringintro"},
    {id:105,topicname:["Monotonic Stack","Array"],name:"Largest Rectangle in a Histogram",desc:"Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of",rlink:"largestrectangleinahistogram"},
    {id:106,topicname:["String","Dynamiuc Programming"],name:"Longest Common Subsequence",desc:"Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",rlink:"longestcommonsubsequence"},
    {id:107,topicname:["HashTable","LinkedList","Doubly-Linked List","Design"],name:"LRU Catch",desc:"Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",rlink:"lrucatch"},
    {id:108,topicname:["Tree","Binary Search Tree","Binary Tree"],name:"Search in a Binary Search Tree",desc:"You are given the root of a binary search tree (BST) and an integer val.Find the node in the BST that the node's value equals val",rlink:"searchinabst"},
    {id:109,topicname:["Tree","Binary Search Tree","Depth First Search","Binary Tree"],name:"Trim a Binary Search Tree",desc:"Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. ",rlink:"trimbst"},
    {id:110,topicname:["Tree","Binary Search Tree","Depth First Search","Binary Tree"],name:"Convert BST to Greater Tree",desc:"Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.",rlink:"convert-bst-to-greater-tree"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
