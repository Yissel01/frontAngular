
import { CommonModule } from '@angular/common';
import { Component, Input, Output} from '@angular/core';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [CommonModule,SeoIconComponent],
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.css'
})
export class BorrarComponent {
  @Input() username = '';
  @Output() lolo = 'hola lolo';

// public user$!: Observable<User>;

// username = new FormControl('');
// pass = new FormControl('');

// console.log(this.login.value['username']);
  // this.user$=this.service.verifyUser();

// console.log('Datos del formulario:', formData['username']);

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
}
