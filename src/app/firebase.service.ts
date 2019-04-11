import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  addMessage(value) {
    return this.db.collection('messages').add({
      name: value.name,
      email: value.email,
      messageBody: value.messageBody
    })
  }
}
