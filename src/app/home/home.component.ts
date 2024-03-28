import { Component} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WebSiteComponent } from '../web-site/web-site.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent,NgStyle,RouterOutlet,WebSiteComponent,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
