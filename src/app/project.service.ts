import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  
  projects: Project[] = [
    {
      id: 1,
      title: 'Beavertail',
      imagePath: '',
      description: '<p>A web-app built in Angular, NodeJS, ExpressJs, MongoDB and Bootstrap, fusing image recognition with augmented reality to create and engaging scavenger hunt game.</p>',
      type: 'Web Development',
      githubLink: 'https://github.com/NewWestMuseumAR/NWMuseumAR',
    },
    {
      id: 2,
      title: 'New West Traffic Tracker',
      imagePath: '/assets/images/portfolio/Logo/card-image.png',
      description: '<p>A mobile app built in Android, displays traffic cameras throughout New Westminster to aid commuters with live camera feeds of incoming and ongoing traffic.</p>',
      type: 'Mobile Development',
      githubLink: '',
    },
    {
      id: 3,
      title: 'Rapp',
      imagePath: '/assets/images/portfolio/NearbyAR/card-image.png',
      description: `<p>Built with Swift, Rapp is a freestyle rapper's companion app that plays hip-hop instrumentals for users to rap to, and record their verses.</p>`,
      type: 'Mobile Development',
      githubLink: '',
    },
    {
      id: 4,
      title: 'victorbak.com',
      imagePath: '/assets/images/portfolio/Portfolio/card-image.png',
      description: `<p>Built with Angular, you're here right now!</p>`,
      type: 'Web Development',
      githubLink: '',
    },
  ]

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
