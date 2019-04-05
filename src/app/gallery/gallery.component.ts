import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  projects: Project[];

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}
