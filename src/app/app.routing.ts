import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { UserFormComponent } from './users/user-form/user-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UserFormComponent },
  { path: 'users', component: UserFormComponent },
  { path: '**', redirectTo: 'users' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
