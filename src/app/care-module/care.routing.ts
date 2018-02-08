import { RouterModule, Routes } from '@angular/router';
import { CarePageComponent } from './care-page/care-page.component';
import { CareComponent } from './care/care.component';
import { HeartComponent } from './heart/heart.component';
import { OrthoComponent } from './ortho/ortho.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { IcuComponent } from './icu/icu.component';
const routes: Routes = [
    { path: '', component: CarePageComponent },
    { path: 'sidebarcare', component: CareComponent },
    { path: 'heart', component: HeartComponent },
    { path: 'ortho', component: OrthoComponent },
    { path: 'emer', component: EmergencyComponent },
    { path: 'icu', component: IcuComponent }
];


export const router = RouterModule.forChild(routes);
