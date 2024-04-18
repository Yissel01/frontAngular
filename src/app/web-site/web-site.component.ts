import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { HttpService } from '../core/services/http.service';
import { Observable } from 'rxjs';
import { WebsiteRow, WebsiteTable } from '../core/interfaces/website';




@Component({
  selector: 'app-web-site',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './web-site.component.html',
  styleUrl: './web-site.component.css'
})
export class WebSiteComponent implements OnInit {
  pageTitle= 'Sitios web';
  titles = ['#','Sitios web', 'Verificación "HTML"' , 'Verificación "Meta"', 'Acciones'];
  //  data = [
  //   { ID: 1, Nombre: 'Juan', Edad: 30 },
  //   { ID: 2, Nombre: 'María', Edad: 25 },
  //   { ID: 3, Nombre: 'Juan', Edad: 30 },
  //   { ID: 4, Nombre: 'María', Edad: 25 },
  //   { ID: 5, Nombre: 'Juan', Edad: 30 },
  //   { ID: 6, Nombre: 'María', Edad: 25 },
  //   { ID: 7, Nombre: 'Juan', Edad: 30 },
  //   { ID: 8, Nombre: 'María', Edad: 25 },
  //   { ID: 9, Nombre: 'Juan', Edad: 30 },
  //   { ID: 10, Nombre: 'María', Edad: 25 },
  //   { ID: 11, Nombre: 'Juan', Edad: 30 },
  //   { ID: 12, Nombre: 'María', Edad: 25 },
  //   { ID: 13, Nombre: 'Juan', Edad: 30 },
  //   { ID: 14, Nombre: 'María', Edad: 25 },
  //   { ID: 15, Nombre: 'Juan', Edad: 30 },
  //   { ID: 16, Nombre: 'María', Edad: 25 },
  //   { ID: 17, Nombre: 'Juan', Edad: 30 },
  //   { ID: 18, Nombre: 'María', Edad: 25 },
  //   { ID: 19, Nombre: 'Juan', Edad: 30 },
  //   { ID: 20, Nombre: 'María', Edad: 25 },
  //   { ID: 21, Nombre: 'Juan', Edad: 30 },
  //   { ID: 22, Nombre: 'María', Edad: 25 },
  //   { ID: 23, Nombre: 'Juan', Edad: 30 },
  //   { ID: 24, Nombre: 'María', Edad: 25 },
  //   { ID: 25, Nombre: 'Juan', Edad: 30 },
  //   { ID: 26, Nombre: 'María', Edad: 25 },

  // ];

  data!: WebsiteRow[];

  constructor(private http: HttpService){

  }

  ngOnInit(): void {
    this.http.getWebsitesTable().subscribe(
      response => {
          console.log('Respuesta exitosa:', response.content);
          this.data = response.content;
          // Acciones adicionales
      },
      error => {
          console.error('Error al enviar los datos:', error);
          // Maneja el error
      }
  );
  }

}
