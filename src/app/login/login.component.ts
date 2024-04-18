import { Component } from '@angular/core';
import { BorrarComponent } from '../borrar/borrar.component';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../core/services/http.service';
import { User } from '../core/interfaces/user';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ SeoIconComponent, RouterOutlet , BorrarComponent, FormsModule, ReactiveFormsModule, HttpClientModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: FormGroup;

  constructor(private router: Router, private http: HttpService, formBuilder: FormBuilder) {

    this.login = formBuilder.group({
      username: '', // Campo para el nombre
      pass: '', // Campo para la dirección
    });
  }

  // La idea es la siguiente
  // Se crea un token en el back una vez q se inicia sesion
  // Ese token el back lo envia al front una vez
  // El front guarda el token en la sesion del navegador o en localStorage
  // El front envia el token en cada peticion que hace al back

onSubmit() {
  const formData: User = this.login.value;
    this.http.verifyUser(formData).subscribe(
      response => {
          if(!response.token){
            console.log('NO HAY RESPONSE.TOKEN. Esta es la response: '+ response.results);
            this.router.navigate(['/login']);
          }else{
            sessionStorage.setItem('auth_token', 'Bearer '+response.token);
            console.log('Respuesta exitosa, resulsts: '+ response.token);
            // Acciones adicionales

            if(sessionStorage.getItem('auth_token')){
              // luego redirige a otro componente
              this.router.navigate(['/home/website']);
            }

          }
      },
      error => {
          console.error('Error al enviar los datos:', error);
          // Maneja el error
      }
  );


}



}
