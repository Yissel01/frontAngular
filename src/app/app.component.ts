import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BorrarComponent } from './borrar/borrar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgStyle } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, RouterLink, RouterLinkActive, BorrarComponent,SidebarComponent,NavbarComponent,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title='';
}
