import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BorrarComponent } from './borrar/borrar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WebSiteComponent } from './web-site/web-site.component';
import { authGuard } from './core/guards/auth.guard';
import { ModalComponent } from './modal/modal.component';
import { ColapseComponent } from './colapse/colapse.component';
import { SupportComponent } from './support/support.component';
// import { Seowebmas93873e570b7c7f866a7efd89345bb04bComponent } from './seowebmas93873e570b7c7f866a7efd89345bb04b/seowebmas93873e570b7c7f866a7efd89345bb04b.component';




export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'borrar', component: BorrarComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'co', component: ColapseComponent },
  { path: 'seowebmas93873e570b7c7f866a7efd89345bb04b', redirectTo: 'https://www.uci.cu/', pathMatch: 'full' },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard], children:[
    { path: '', redirectTo: 'website', pathMatch: 'full' }, //para que cuando se escriba la ruta home sola vaya por defecto a website
    { path: 'website', component: WebSiteComponent,  children:[
    ]},
    { path: 'help', component: SupportComponent},
    { path: 'borrar', component: BorrarComponent },
  ] },
  { path: '' , redirectTo:'login', pathMatch: 'full'},
];
