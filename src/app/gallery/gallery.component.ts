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
    //this.projectLength();
  }

  projects: Project[];

  selectedProject: Project;
  
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

  projectLength() {
    for(let i = 0; i < this.projects.length; i++) {
      alert(this.projects[i].title);
    }
  }


  onProjectClick(event: any) {
      switch (event.target.id) {
        case 'item1':
          alert('first one');
          break;
        case 'item2':
          alert('second one');
          break;
        case 'item3':
          alert('third');
          break;
        case 'item4':
          alert('last');
          break;
      }
  }

}
