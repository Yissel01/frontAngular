import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BorrarComponent } from './borrar/borrar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WebSiteComponent } from './web-site/web-site.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'borrar', component: BorrarComponent },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent,children:[
   { path: 'website', component: WebSiteComponent},

  ] },
  { path: '' , redirectTo:'login', pathMatch: 'full'},
];
