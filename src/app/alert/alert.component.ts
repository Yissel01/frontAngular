import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: ``,
  styles: [`
//   .alert {
//     position: fixed;
//     right: 20px;
//     bottom: 20px;
//     border-radius: 5px;
//     background-color: #b8ff6b;
//     color: #515150;
//     padding: 10px;
//   }
`]
})

export class AlertComponent {

  static alert(message: string){
    // Crear el elemento de la alerta
    let alert = document.createElement("div");
    alert.textContent = message;
    // alert.className = "alert";

    alert.style.position = "fixed";
    alert.style.bottom = "20px";
    alert.style.right = "20px";
    alert.style.borderRadius = "5px";
    alert.style.backgroundColor = "#b8ff6b";
    alert.style.color = "#515150";
    alert.style.padding = "10px";

    // Añadir la alerta al documento
    document.body.appendChild(alert);

    // Eliminar la alerta después de 3 segundos
    setTimeout(function() {
        document.body.removeChild(alert);
    }, 3000);
  }
}
