import { Component, ElementRef, HostListener } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle,NgClass,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

isOpen= false;
showUserMenu = false;


constructor(private elRef: ElementRef) {}

@HostListener('document:click',['$event'])

unShow(event: Event){
  // Obtener el elemento específico
  const userButtonArray = this.elRef.nativeElement.querySelectorAll('.userButton');

  // Verifica si el click se originó en alguno de los elementos específicos que son los que usan la clase userButton
  if (!Array.from(userButtonArray).includes(event.target)) {
    this.showUserMenu=false;
  }

}

toggle() {
  this.isOpen = !this.isOpen;
}

show(){
  this.showUserMenu = !this.showUserMenu;
}

logout(){

}

}

