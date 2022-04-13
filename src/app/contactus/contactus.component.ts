import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkedinlink:string  ="click <a href='https://www.linkedin.com/in/yash-agrawal-erek2024/'> Follow us on LinkedIn</a>";
}

