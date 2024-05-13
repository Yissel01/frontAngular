import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: ``,
  /*styles: [`
//   .alert {
//     position: fixed;
//     right: 20px;
//     bottom: 20px;
//     border-radius: 5px;
//     background-color: #b8ff6b;
//     color: #515150;
//     padding: 10px;
//   }
`]*/
})

export class AlertComponent {

  static alert(message: string){
    // Crear el elemento de la alerta
    let alerta = document.createElement("div");
    alerta.textContent = message;
    // alert.className = "alert";

    alerta.style.position = "fixed";
    alerta.style.bottom = "20px";
    alerta.style.right = "20px";
    alerta.style.borderRadius = "5px";
    alerta.style.backgroundColor = "#b8ff6b";
    alerta.style.color = "#515150";
    alerta.style.padding = "10px";
    alerta.style.zIndex = "10000";

    // Añadir la alerta al documento
    document.body.appendChild(alerta);

    // Eliminar la alerta después de 3 segundos
    setTimeout(function() {
        document.body.removeChild(alerta);
    }, 3000);
  }
}
