import { Component } from '@angular/core';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Victor Bak's Portfolio";

  constructor() {
  }
  
}
