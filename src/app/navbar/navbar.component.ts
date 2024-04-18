import { Component, ElementRef, HostListener } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from '../core/services/http.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle,NgClass,AlertComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

isOpen= false;
showUserMenu = false;


constructor(private elRef: ElementRef, private router: Router, private http: HttpService) {}

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
// código para cerrar sesion...
  sessionStorage.removeItem('auth_token');
  this.router.navigate(['/login']);

//.........................................en caso de que haya que ir a la api a algo
    // this.http.logout().subscribe(
    //   resp => {
    //     //redirige a otro componente
    //     this.router.navigate(['/login']);
    //     //muestra una notificacion de sesion cerrada
    //     AlertComponent.alert(resp.results);
    //   },
    //   error => {
    //     console.error('Error al enviar los datos:', error);
    //   }
    // );
}

}

