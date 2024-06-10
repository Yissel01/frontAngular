import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { HttpService } from '../core/services/http.service';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass, CommonModule,AlertComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent implements OnInit{
  //cosas del modal
  @Output() close = new EventEmitter<void>();
  @Input() userWebsiteID!:string; //identifica a que sitio web con cual usuario se va a verificar
  @Input() url!:string; //url del sitio para mostrarlo en el modal

  constructor(private router: Router, private http: HttpService) {}

  ngOnInit(): void {
    // al abrir el modal se hace una peticion a la api para obtener los codigos para el archivo html
    // y la etiqueta meta correspondientes al sitio con el usuario, para que al cargar el modal
    // ya este disponible esta informacion y se pueda descargar o copiar
    this.http.getWebsiteVerification(this.userWebsiteID).subscribe(
      response => {
        this.htmlContent = response.htmlCode;
        this.htmlName = 'seowebmas'+this.htmlContent+'.html'
        this.metaVerification ='<meta name="seowebmas-verification" content="'+ response.metaCode+'">';
      },
      error => {
          console.error('Error al enviar los datos:', error);
      });
  }

  //cierra el modal
  onClose() {
    this.close.emit();
  }


  //cosas del desplegable

  //define si estan abiertos o cerrados los desplegables
  openHTML = false;
  openMeta = false;
  //contenido de las verificaciones definidos en el metodo ngOnInit
  htmlContent!:string;
  htmlName!:string;
  metaVerification!:string;

  //metodos de abrir y cerrar los desplegables
  toggleHTML() {
    this.openHTML = !this.openHTML;
  }

  toggleMeta() {
    this.openMeta = !this.openMeta;
  }

  //descarga el html de verificacion
  downloadHTML(){
    // Crea un Blob con el contenido HTML
    // Un Blob representa datos que no necesariamente están en un formato nativo de JavaScript
    const blob = new Blob(['seowebmas-verification: seowebmas'+ this.htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);

    // Crea un enlace temporal y desencadena la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = this.htmlName; // Nombre del archivo a descargar
    document.body.appendChild(a);
    a.click();

    // Limpia la URL y remueve el enlace temporal
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  //copia al portapapeles la etiqueta meta de verificacion
  copy(){
    const aux = document.createElement('input');
    aux.setAttribute('value', this.metaVerification);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    AlertComponent.alert('Se ha copiado en el portapapeles');
  }

}

