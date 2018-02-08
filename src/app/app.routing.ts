import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'care', loadChildren: './care-module/care-module.module#CareModuleModule' },
    { path: '', loadChildren: './home-module/home-module.module#HomeModuleModule' }
];


export const router = RouterModule.forRoot(routes);
