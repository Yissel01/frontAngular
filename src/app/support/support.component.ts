import { Component, ElementRef, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [SeoIconComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  pageTitle = 'Ayuda';

  @ViewChildren('scroll', { read: ElementRef }) elements!: QueryList<ElementRef>;

  scrollToElement(id: string): void {
    const element = this.elements.find(el => el.nativeElement.id === id);
    element?.nativeElement.scrollIntoView({behavior: "smooth"});
  }
}
