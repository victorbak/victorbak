import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  
  projects: Project[] = [
    {
      id: '1',
      title: 'Beavertail',
      description: ['Beavertail is a social app for users who want to share their local news to the world, shedding light on stories that would otherwise be unheard of in a global scale.',
      'This web-app was built with three other peers. I had a lot of fun working on this one, because I got to primarily develop the backend. I also got to assist with some front-end and made services for data to be displayed on the front-end.'],
      type: 'Web Development',
      github: '',
      toolset: 'Angular, NodeJS, ExpressJS, MongoDB, Bootstrap',
      coverImage: '../../../assets/images/bt2c.png',
      images: ['../../../assets/images/B2.png', '../../../assets/images/B3.png', '../../../assets/images/B4.png']
    },
    {
      id: '2',
      title: 'New West Traffic Tracker',
      description: [`New West Traffic Tracker is an app for commuters who want to see live update camera feeds of New West traffic.`, 'This app was made ' 
    + 'in collab with the City of New Westminster. It\'s and app that uses data sets provided by New West and DriveBC, which allows for a quick way for drivers to actually see which way would be wisest to take for their commute.'],
      type: 'Mobile Development',
      github: '',
      toolset: 'Android, Java',
      coverImage: '../assets/images/nw4.png',
      images: ['../assets/images/nws2.png', '../assets/images/nws1.png', '../assets/images/nws3.png']
    },
    {
      id: '3',
      title: 'Budge',
      description: ['Budge is a handy web-app to manage personal finances and budgets. It helps users keep track of their expenses, bills and current cash.', 
      'This one is a personal project of mine. I made it for initially for myself to use, but I\'m sure there are many people who could use it as well.'],
      type: 'Web Development',
      github: '',
      toolset: 'Laravel, PHP, MySQL, Bootstrap',
      coverImage: '../assets/images/budge.png',
      images: ['../assets/images/bud1.png', '../assets/images/buds_1.png', '../assets/images/bud3.png']
    },
    {
      id: '4',
      title: 'victorbak.com',
      description: [`You may have realized that you're already on this site!`, 'This is a project of mine to show off work I\'ve done, and will be doing. It was a lot ' 
    + 'of fun building this site, as I wanted to code everything from scratch. I\'m proud to call this my portfolio. If you want to comment or criticize, don\'t hesitate to drop a message in the form below! :)'],
      type: 'Web Development',
      github: '',
      toolset: 'Angular, Firebase',
      coverImage: '../assets/images/v0.png',
      images: ['../assets/images/vb2.png', '../assets/images/vb3.png', '../assets/images/vb4.png']
    },
  ]

  //returns all project as an observable
  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  //returns project by id
  getProject(id: string): Observable<Project> {
    return of(this.projects.find(project => project.id === id));
  }
}
