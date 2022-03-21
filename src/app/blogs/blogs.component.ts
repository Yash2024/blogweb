import { Component, OnInit } from '@angular/core';
import { blg } from '../blg.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blog: blg ={id:null,topicname:"",name:"",desc:"",rlink:""};
  bloglist: blg[]=[
    {id:101,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:102,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:103,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:103,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:103,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:103,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"},
    {id:103,topicname:"linkedlist",name:"Cycle in a Linked List",desc:"How to detect a cycle in a Linked List Here's one attempt. It sorta works, although you might have to adjust the styling on the <a> to cater for font changes and such",rlink:"cycle in a linkedlist"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
