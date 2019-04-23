import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  addMessage(value) {
    console.log(value.name, value.email, value.messageBody);
    return this.db.collection('messages').add({
      name: value.name,
      email: value.email,
      messageBody: value.message
    })
  }
}
