
import { CommonModule } from '@angular/common';
import { Component, Input, Output} from '@angular/core';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';
import { ModalComponent } from '../modal/modal.component';
import { ColapseComponent } from '../colapse/colapse.component';

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [CommonModule,SeoIconComponent,ModalComponent, ColapseComponent],
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.css'
})
export class BorrarComponent {
  @Input() username = '';
  @Output() lolo = 'hola lolo';

  src = '../../assets/img/checked.svg';

  html= 'html';
  meta = 'meta';

  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

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
