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

isOpen= false; //determina si el aside esta abierto o cerrado
showUserMenu = false; // determina si el menu de cerrar sesion esta abierto o cerrado
username = sessionStorage.getItem('username'); // por si se quiere mostrar el nombre del usuario logeado en alguna parte del navbar


constructor(private elRef: ElementRef, private router: Router, private http: HttpService) {}

@HostListener('document:click',['$event'])

//metodo para que cuando este abierto el menu de cerrar sesion y se clickee en cualquier parte de la pantalla se cierre el menu
unShow(event: Event){
  // Obtener el elemento específico
  const userButtonArray = this.elRef.nativeElement.querySelectorAll('.userButton');
  // Verifica si el click se originó en alguno de los elementos específicos que son los que usan la clase userButton
  if (!Array.from(userButtonArray).includes(event.target)) {
    this.showUserMenu=false;
  }
}

//para abrir y cerrar el aside
toggle() {
  this.isOpen = !this.isOpen;
}

//abre o cierra el menu de cerrar sesion
show(){
  this.showUserMenu = !this.showUserMenu;
}

//cierra la sesion y te lleva al login
logout(){
// código para cerrar sesion...
  sessionStorage.removeItem('auth_token');
  sessionStorage.clear();
  this.router.navigate(['/login']);
  AlertComponent.alert('Sesión cerrada con éxito');
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

