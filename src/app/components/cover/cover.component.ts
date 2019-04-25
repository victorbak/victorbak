import { Component, OnInit, HostBinding} from '@angular/core';
import { coverAnimation } from '../../animations';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [
    coverAnimation
  ]
})
export class CoverComponent implements OnInit {

  constructor() { }

  @HostBinding('@pageAnimations')

  name = "Victor Bak";
  title = "Web Developer";

  ngOnInit() {
  }

}
