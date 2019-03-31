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
import { HeaderComponent } from './shared/header.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryInfoComponent } from './gallery-info/gallery-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    GalleryComponent,
    GalleryInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
