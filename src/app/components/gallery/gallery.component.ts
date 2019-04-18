import { Component, OnInit, HostBinding } from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';
import { galleryAnimation } from '../../animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    galleryAnimation
  ]
})
export class GalleryComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }
  

  @HostBinding('@pageAnimations')
  projects: Project[];

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}
