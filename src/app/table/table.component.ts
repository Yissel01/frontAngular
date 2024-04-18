import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
  @Input() colTitles: string[] | undefined; //titulos de las columnas
  @Input() rowContent!: any[] | undefined; //contenidos por filas, cada elemento del array es una fila

  objectKeys = Object.keys; //para obtener el identificador de cada elemento de un objeto del array, para poder llamar a cada elemento a la fila

  items = new FormControl('10'); //obtiene los datos del select y lo posiciona inialmente en 10
  itemsPerPage: number=10; // Número inicial de elementos por página

  currentPage = 1;// pagina inicial del paginador

  constructor() {

    //para cambiar el valor de la cantidad de items por pagina segun el contenido del select
    this.items.valueChanges.subscribe((newValue: string | null) => {
      // Convierte el valor a número (si es válido, de lo contrario toma valor 0)
      const valorNumerico = parseInt(newValue || '0', 10);
      if (!isNaN(valorNumerico)) {
        this.itemsPerPage = valorNumerico;
        this.currentPage=1; //posiciona la tabla en la pagina 1 cada vez que se cambia la cantidad de items por pagina
      }//nota: se hace todo esto porque itemsPerPage es un numero y items.value devolveria un elemento de tipo string

  });

  }

  //devuelve el total de paginas necesarias segun la cantidad total de filas de la tabla,
  //es decir segun la longitud del arreglo de datos
  get totalPages(): number {
    return this.rowContent ? Math.ceil(this.rowContent.length / this.itemsPerPage) : 0;//operador ternario if else
  }

  //devuelve un array con los elemetos a mostrar en la pagina actual de la tabla
  get currentRows(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.rowContent ? this.rowContent.slice(startIndex, startIndex + this.itemsPerPage): [];
  }

  //lleva a la pagina anterior si existe
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  //lleva a la pagina siguiente si existe
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
