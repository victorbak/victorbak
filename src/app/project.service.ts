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
      description: 'This web-app was built with three other peers. I had a lot of fun working on this one, because I got to primarily develop the backend. I also got to assist with some front-end and ' 
      + 'made services for data to be displayed on the front-end. <p> Beavertail is a social app for users who want to share their local news to the world, shedding light on stories that would otherwise be unheard of in a global scale.</p>',
      type: 'Web Development',
      github: '',
      toolset: 'Angular, NodeJS, ExpressJS, MongoDB, Bootstrap',
      coverImage: '../../../assets/images/bt2c.png',
      images: ['../../../assets/images/B2.png', '../../../assets/images/B3.png', '../../../assets/images/B4.png']
    },
    {
      id: '2',
      title: 'New West Traffic Tracker',
      description: 'A mobile app built in Android, displays traffic cameras throughout New Westminster to aid commuters with live camera feeds of incoming and ongoing traffic.',
      type: 'Mobile Development',
      github: '',
      toolset: 'Java, Android, Google Maps API',
      coverImage: '../assets/images/preview16.jpg',
      images: ['../assets/images/preview16.jpg', '../assets/images/preview16.jpg', '../assets/images/preview16.jpg']
    },
    {
      id: '3',
      title: 'Rapp',
      description: `Built with Swift, Rapp is a freestyle rapper's companion app that plays hip-hop instrumentals for users to rap to, and record their verses.`,
      type: 'Mobile Development',
      github: '',
      toolset: 'Swift',
      coverImage: '../assets/images/preview16.jpg',
      images: ['', '']
    },
    {
      id: '4',
      title: 'victorbak.com',
      description: `Built with Angular, you're here right now!`,
      type: 'Web Development',
      github: '',
      toolset: 'Angular',
      coverImage: '../assets/images/v0.png',
      images: ['', '']
    },
  ]

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: string): Observable<Project> {
    return of(this.projects.find(hero => hero.id === id));
  }
}
