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
      id: '1',
      title: 'Beavertail',
      description: 'A web-app built in Angular, NodeJS, ExpressJs, MongoDB and Bootstrap. A local-news, user aggregate site where mostly unpublished news will be brought to light for the world to see.',
      type: 'Web Development',
      github: '',
      toolset: 'Angular, NodeJS, ExpressJS, MongoDB, Bootstrap',
      image: '../assets/images/preview16.jpg'
    },
    {
      id: '2',
      title: 'New West Traffic Tracker',
      description: 'A mobile app built in Android, displays traffic cameras throughout New Westminster to aid commuters with live camera feeds of incoming and ongoing traffic.',
      type: 'Mobile Development',
      github: '',
      toolset: 'Java, Android, Google Maps API',
      image: '../assets/images/preview16.jpg'
    },
    {
      id: '3',
      title: 'Rapp',
      description: `Built with Swift, Rapp is a freestyle rapper's companion app that plays hip-hop instrumentals for users to rap to, and record their verses.`,
      type: 'Mobile Development',
      github: '',
      toolset: 'Swift',
      image: '../assets/images/preview16.jpg'
    },
    {
      id: '4',
      title: 'victorbak.com',
      description: `Built with Angular, you're here right now!`,
      type: 'Web Development',
      github: '',
      toolset: 'Angular',
      image: '../assets/images/preview16.jpg'
    },
  ]

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: string): Observable<Project> {
    return of(this.projects.find(hero => hero.id === id));
  }
}
