// tab2.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  books: { [key: string]: boolean } = {
    frankenstein: false,
    it: false,
    carterville: false,
    cuestaNoche: false,
    faseRubi: false, // Cambiado de faseRubí a faseRubi
    casaCerebro: false,
    pozoPendulo: false, // Cambiado de pozoPéndulo a pozoPendulo
    cthulhu: false,
    dracula: false,
  };

  constructor() {}

  onBookCheckedChange(bookKey: string) {
    console.log(`${bookKey} Checked: ${this.books[bookKey]}`);
  }

  getBookIcon(bookKey: string) {
    // Lógica para obtener el icono según el libro (debes definirla)
    // Ejemplo simple:
    return "flash-outline";
  }

  getBookTitle(bookKey: string) {
    // Lógica para obtener el título según el libro (debes definirla)
    // Ejemplo simple:
    return "Título del Libro";
  }
}
