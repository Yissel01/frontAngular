import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BorrarComponent } from './borrar/borrar.component';
import { HomeComponent } from './home/home.component';
import { WebSiteComponent } from './web-site/web-site.component';
import { authGuard } from './core/guards/auth.guard';
import { ModalComponent } from './modal/modal.component';
import { SupportComponent } from './support/support.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard], children:[
    { path: '', redirectTo: 'website', pathMatch: 'full' }, //para que cuando se escriba la ruta home sola vaya por defecto a website
    { path: 'website', component: WebSiteComponent},
    { path: 'help', component: SupportComponent},
  ]},
  { path: '' , redirectTo:'login', pathMatch: 'full'},
  { path: '**' , component: NotFoundComponent }
];
