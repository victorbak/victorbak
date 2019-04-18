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
  private checked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
  ) {}
  
  @HostBinding('@pageAnimations')

  ngOnInit() {
    this.getProject();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
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

}
