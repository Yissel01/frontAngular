import { NgClass } from '@angular/common';
import { Component, Input, NgModule, input } from '@angular/core';

@Component({
  selector: 'app-colapse',
  standalone: true,
  imports: [NgClass, ],
  templateUrl: './colapse.component.html',
  styleUrl: './colapse.component.css'
})
export class ColapseComponent {
  @Input() titulo!: String;
  // titulo = 'Haz clic para expandir';

  isExpanded = false;

  toggleDesplegable() {
    this.isExpanded = !this.isExpanded;
  }



}
