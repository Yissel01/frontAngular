import { Component } from '@angular/core';
import { BorrarComponent } from '../borrar/borrar.component';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ SeoIconComponent, RouterOutlet , BorrarComponent, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username = 'Lacho';
log = false;

constructor(private router: Router) { }

onSubmit() {
  // código para procesar el formulario...

  // luego redirige a otro componente
  this.router.navigate(['/home/website']);
}

  variosdatos = [
    {
      id:1,
      name: 'uno'
    },
    {
      id : 2,
      name : 'dos'
    },
    {
      id: 3,
      name : 'tres'
    }
  ]

greet(){
  alert('Holaaa '+this.username );
}

}
