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
  @Input() userWebsiteID!:string;
  @Input() url!:string;

  constructor(private router: Router, private http: HttpService) {}

  ngOnInit(): void {
    this.http.getWebsiteVerification(this.userWebsiteID).subscribe(
      response => {
        console.log(response)
        this.htmlContent = response.htmlCode;
        this.htmlName = 'seowebmas'+this.htmlContent+'.html'
        this.metaVerification ='<meta name="seowebmas-verification" content="'+ response.metaCode+'">';
      },
      error => {
          console.error('Error al enviar los datos:', error);
          // Maneja el error
      });
  }

  onClose() {
    this.close.emit();
  }


  //cosas del desplegable

  titulo = 'Haz clic para expandir';


  openHTML = false;
  openMeta = false;
  htmlContent!:string;
  htmlName!:string;
  metaVerification!:string;

  toggleHTML() {
    this.openHTML = !this.openHTML;
  }

  toggleMeta() {
    this.openMeta = !this.openMeta;
  }

  navigateToHelp(){
    this.router.navigate(['home/help'], { fragment: 'de-prueba' });
  }

  downloadHTML(){
    const htmlContent = 'holis desde el archivo descargado';//contenido del html

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

