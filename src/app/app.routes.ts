import { Routes } from '@angular/router';
import { PrimerProcesoComponent } from './paginas/admin/contratacion/contrato/primer-proceso/primer-proceso.component';
import { SegundoProcesoComponent } from './paginas/admin/contratacion/contrato/segundo-proceso/segundo-proceso.component';
import { TercerProcesoComponent } from './paginas/admin/contratacion/contrato/tercer-proceso/tercer-proceso.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { ContratoComponent } from './paginas/admin/contratacion/contrato/contrato.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { LoginComponent } from './paginas/auth/login/login.component';
import { RegisterComponent } from './paginas/auth/register/register.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
      {
        path: 'proceso-1',
        component: PrimerProcesoComponent,
      },
      {
        path: 'proceso-2',
        component: SegundoProcesoComponent,
      },
      {
        path: 'proceso-3',
        component: TercerProcesoComponent,
      },
    ],
  },
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
