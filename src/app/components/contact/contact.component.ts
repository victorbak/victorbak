import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../firebase.service';

import { Message } from '../../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService
    ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      message: ['', [
        Validators.required
      ]]
    });
    this.contactForm.valueChanges.subscribe(console.log)
  }

  
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }


  model = new Message(18, 'voctor','test@test.com', 'Hello There!');

  submitted = false;


  resetFields(){
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    alert(value.name);
    this.firebaseService.addMessage(value)
    .then(
      res => {
        this.resetFields();
      }
    )
  }
  

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
