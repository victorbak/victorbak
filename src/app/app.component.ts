import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { slideInAnimation} from './animations';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // slideInAnimation
  ]
})
export class AppComponent {
  private route: Router;
  private subscription: Subscription;
  title = "Victor Bak's Portfolio";

  // Example in the constructor of you App Component
  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        this.route.navigate(['/']);
      }
    });
  }
  
}
