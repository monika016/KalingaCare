import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarePageComponent } from './care-page/care-page.component';
import { router } from './care.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CareComponent } from './care/care.component';
import { HeartComponent } from './heart/heart.component';
import { OrthoComponent } from './ortho/ortho.component';
import { IcuComponent } from './icu/icu.component';
import { EmergencyComponent } from './emergency/emergency.component';


@NgModule({
  imports: [
    CommonModule,
    router
  ],
  declarations: [CarePageComponent, SidebarComponent, CareComponent, HeartComponent, OrthoComponent, IcuComponent, EmergencyComponent]
})
export class CareModuleModule { }
