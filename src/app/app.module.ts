import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
// import { useAnimation } from '@angular/core/src/animation/dsl';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';
import { getLocaleCurrencySymbol, WeekDay } from '@angular/common';
import { clearOverrides } from '@angular/core/src/view';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/shared/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    GalleryComponent,
    routingComponents,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
