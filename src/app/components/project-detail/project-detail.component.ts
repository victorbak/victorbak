import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
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
  ]
})
export class ProjectDetailComponent implements OnInit {

  private fragment: string;
  checked: boolean = false;
  private isOverlayOn: boolean = false;
  private displayImage;
  private imageIndex;
  private body;
  private overlay;
  mobileIndex;
  key;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
  ) {}
  
  //for animations
  @HostBinding('@pageAnimations')

  ngOnInit() {
    this.getProject();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.overlay = document.getElementById('image-overlay');
    this.body = document.getElementById('body')
    this.mobileIndex = 0;
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

  //returns project for display
  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
    .subscribe(project => this.project = project);
    this.img = this.project.coverImage;
  }

  //return to portfolio gallery
  goBack(): void {
    this.location.back();
  }


  //Opens or closes image gallery, sets display image from images array
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

  //next button for mobile view
  mobileNext() {
    if(this.mobileIndex == null) {
      return;
    }
    if(this.mobileIndex < this.project.images.length - 1) {
      this.mobileIndex++;
    }
    else {
      if (this.mobileIndex == this.project.images.length - 1 ) {
        this.mobileIndex = 0;
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(this.isOverlayOn) {
      this.key = event.keyCode;
      console.log(this.key);
      //left arrow pressed, prev image
      if(this.key === 37) {
        this.prev();
        //right arrow pressed next image
      } else if (this.key === 39) {
        this.next();
      }
    }
  }

  //next button for desktop view
  next(e? : Event) {
    if (e) {
      e.stopPropagation(); 
    }
    if (this.imageIndex == null) {
      return;
    } 
    //next image in array
    if(this.imageIndex < this.project.images.length - 1) {
      this.imageIndex++;
    }
    else {
      //go back to first image if on last item
      if (this.imageIndex == this.project.images.length - 1 ) {
        this.imageIndex = 0;
      }
    }
    //sets display image
    this.displayImage.src = this.project.images[this.imageIndex];
  }

  prev(e? : Event) {
    if(e) {
      e.stopPropagation();
    }
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
