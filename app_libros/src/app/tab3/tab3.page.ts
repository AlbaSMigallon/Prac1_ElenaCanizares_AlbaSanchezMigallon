import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private inAppBrowser: InAppBrowser) {}

  abrirPaginaWeb(url: string) {
    const browser = this.inAppBrowser.create(url, '_blank');
  }

  abrirImagen() {
    const url = 'https://docs-demo.ionic.io/assets/madison.jpg'; // URL de la imagen
    const browser = this.inAppBrowser.create(url, '_system'); // Abre la URL en el sistema del dispositivo
  }
}
