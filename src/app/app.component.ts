import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BorrarComponent } from './borrar/borrar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgStyle } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, RouterLink, RouterLinkActive, BorrarComponent,SidebarComponent,NavbarComponent,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
title='';

constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    // this.titleService.setTitle('SEO WebMas: Herramienta para el analisis SEO de sitios web');
    // this.metaService.addTags([
    //   {name: 'prueba', content: 'la otra'},
    //   {name: 'prueba', content: 'contenido de la etiqueta meta de prueba'},
    //   {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    //   {name: 'google-site-verification', content: 'width=device-width, initial-scale=1'},
    //   {name: 'google-site-verification', content: 'width=device-width, initial-scale=12'},
    //   {name: 'google-site-verification', content: 'width=device-width, initial-scale=13'},
    //   // otras etiquetas meta que necesites
    // ]);
  }

}
