service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{messageID} {
      allow create: if request.resource.data.messageBody.size() > 1 &&
      request.resource.data.messageBody.size() <= 750 &&
      request.resource.data.name.size() > 0 &&
      request.resource.data.name.size() < 75 &&
      request.resource.data.email.size() > 0 &&
      request.resource.data.email.size() < 75;
      allow read: if false;
    }
  }
}