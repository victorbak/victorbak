import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Location } from '@angular/common';
import { detailAnimation } from '../../animations';

import { ProjectService }  from '../../project.service';
import { Project } from '../../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  animations: [
    detailAnimation
  ],
  //for styles to work on innerHTML markup
  // encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {

  private fragment: string;
  checked: boolean = false;
  private isOverlayOn: boolean = false;
  private displayImage;
  private imageIndex;
  private body;
  private overlay;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
  ) {}
  
  @HostBinding('@pageAnimations')

  ngOnInit() {
    this.getProject();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.overlay = document.getElementById('image-overlay');
    this.body = document.getElementById('body')
  }

  //scrolls to to element with id stored in fragment string (overlay)
  ngAfterViewChecked(): void {
    if(!this.checked) {
    try {
        if(this.fragment) {
            document.querySelector('#' + this.fragment).scrollIntoView();
            this.checked = true;
        }
    } catch (e) { }
    return;
  }
  }

  project : Project
  img: String

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
    .subscribe(project => this.project = project);
    this.img = this.project.coverImage;
  }

  goBack(): void {
    this.location.back();
  }


  view(index?: number): void {
    if(index != null) {
      this.imageIndex = index;
    }
    if (!this.isOverlayOn) {
      this.overlay.style.display = 'block';
      this.displayImage = document.getElementById('zoomed-image');
      this.displayImage.src = this.project.images[this.imageIndex];
      this.body.style.overflow = 'hidden';
      this.isOverlayOn = true;
    }
    else {
      this.overlay.style.display = "none"
      this.body.style.overflow = 'visible';
      this.isOverlayOn = false;
    }
  }

  next(e : Event) {
    e.stopPropagation(); 
    if(this.imageIndex < this.project.images.length - 1) {
      this.imageIndex++;
    }
    else {
      if (this.imageIndex == this.project.images.length - 1 ) {
        this.imageIndex = 0;
      }
    }
    this.displayImage.src = this.project.images[this.imageIndex];
  }

  prev(e : Event) {
    e.stopPropagation();
    if (this.imageIndex == 0 ) {
      this.imageIndex = (this.project.images.length - 1);
      this.displayImage.src = this.project.images[this.imageIndex];
    } else {
      if(this.imageIndex <= this.project.images.length - 1) {
        this.imageIndex--;
        this.displayImage.src = this.project.images[this.imageIndex];
      }
    }
  }

}
