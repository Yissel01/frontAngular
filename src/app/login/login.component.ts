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
import { AlertComponent } from '../alert/alert.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ SeoIconComponent, RouterOutlet , BorrarComponent, FormsModule, ReactiveFormsModule, HttpClientModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  message = ''; //para el mensaje de error
  error = false;
  login: FormGroup;

  constructor(private router: Router, private http: HttpService, formBuilder: FormBuilder) {
    //para captar los datos del formulario reactivo
    this.login = formBuilder.group({
      username: '',
      pass: '',
    });
  }

  /* Se crea un token en el back al iniciar sesion, ese token el back lo envia al front una vez
     para que este lo guarde en localStorage, luego el front envia el token en cada peticion que hace a la api */

  onSubmit() {
    if(this.login.valid){
      const formData: User = this.login.value;
      this.http.verifyUser(formData).subscribe(
        response => {
          if(!response.valid){
            this.error = true;
            this.message = 'Credenciales no válidas';
            this.router.navigate(['/login']);
          }else{
            //Si la verificacion tiene exito se crean variable necesarias
            sessionStorage.setItem('username', ''+formData.username);
            sessionStorage.setItem('auth_token', 'Bearer '+response.token);
            // luego redirige a otro componente
            this.router.navigate(['/home/website']);
            AlertComponent.alert('Sesión iniciada con éxito');
          }
        },
        error => {
            console.error('Error al enviar los datos:', error);
        }
      );

    }else{
      //Si los campos requeridos vienen vacios
      this.error = true;
      this.message = 'Campos requeridos vacíos';
      this.login.markAllAsTouched();
    }
  }

}
