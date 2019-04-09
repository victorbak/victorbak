import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  model = new Message(18, 'voctor','test@test.com', 'Hello There!');

  submitted = false;

  onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
