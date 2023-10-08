import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  viento = "https://us.123rf.com/450wm/arcady31/arcady311910/arcady31191000085/133370654-icono-de-vector-de-flujo-de-aire-de-viento-sobre-fondo-blanco.jpg";
  anillo = "https://c0.klipartz.com/pngpicture/879/718/gratis-png-lego-el-senor-de-los-anillos-iconos-de-computadora-anillo.png";
  naranja = "https://images.vexels.com/media/users/3/154689/isolated/preview/f52a893745aab31500e060ad7b7511a0-naranja-con-icono-de-trazo-de-hoja.png";
  hada = "https://cdn.icon-icons.com/icons2/390/PNG/512/fairy_39181.png";
  espada = "https://cdn-icons-png.flaticon.com/512/1904/1904608.png";
  mago = "https://static.vecteezy.com/system/resources/previews/007/630/122/non_2x/magician-line-icon-vector.jpg";
  dragon = "https://cdn-icons-png.flaticon.com/512/1615/1615669.png";
  magia = "https://cdn.icon-icons.com/icons2/2596/PNG/512/magic_icon_155163.png";
  cuervo = "https://cdn-icons-png.flaticon.com/512/92/92034.png";

  constructor(public toastController: ToastController) {}

  async mostrarToast(itemSeleccionado: string) {
    const toast = await this.toastController.create({
      message: `Has elegido: ${itemSeleccionado}`,
      duration: 2000
    });
    toast.present();
  }
  
}

