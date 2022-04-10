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
    {id:102,topicname:["linkedlist"],name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycleinalinkedlist"},
    {id:103,topicname:["linkedlist"],name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycleinalinkedlist"},
    {id:104,topicname:["string"],name:"Introduction To Strings",desc:"Strings are objects that represent sequences of characters.The standard string class provides support for such objects with an interface similar to that of a standard container of",rlink:"stringintro"},
    {id:105,topicname:["Monotonic Stack","Array"],name:"Largest Rectangle in a Histogram",desc:"Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of",rlink:"largestrectangleinahistogram"},
    {id:106,topicname:["String","Dynamiuc Programming"],name:"Longest Common Subsequence",desc:"Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",rlink:"longestcommonsubsequence"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
