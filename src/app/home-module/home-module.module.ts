import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { router } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [HomePageComponent]
})
export class HomeModuleModule { }
