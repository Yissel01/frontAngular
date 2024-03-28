import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output,EventEmitter, input} from '@angular/core';
import { SeoIconComponent } from '../seo-icon/seo-icon.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,SeoIconComponent,RouterOutlet, RouterLink, RouterLinkActive,NgClass,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

route:String = 'website';

@Input() isOpen : boolean = false;

web(route: String){
  this.route = route;
}

}
