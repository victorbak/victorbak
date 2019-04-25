import { Component, OnInit, HostBinding } from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';
import { galleryAnimation } from '../../animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    galleryAnimation
  ]
})
export class GalleryComponent implements OnInit {

  private checked: Boolean = false;
  private fragment: string;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProjects();
  }

  
  ngAfterViewChecked(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    try {
        if(this.fragment) {
            document.querySelector('#' + this.fragment).scrollIntoView();
            this.checked = true;
        }
    } catch (e) { }
    return;
  }


  @HostBinding('@pageAnimations')
  projects: Project[];

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}
