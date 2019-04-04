import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
    { path: 'gallery', component:GalleryComponent },
    { path: 'project-details', component: ProjectDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
export const routingComponents = [ProjectDetailComponent];