import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.getProject();
  }

  project : Project

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
    .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}
