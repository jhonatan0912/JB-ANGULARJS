import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pago: any
  descuento: any
  pagoNeto: any

  calcular(km: HTMLInputElement | any) {
    if (km.value <= 0) {
      alert("Numero invalido")
    }
    if (km.value <= 300) {
      this.pago = 250
    } else if (km.value > 300 && km.value <= 1000) {
      this.pago = 250 + (km.value - 300) * 30
    } else {
      this.pago = 250 + 700 * 30 + (km.value - 1000) * 20
    }

    if (this.pago > 500) {
      this.descuento = this.pago * 0.10
      this.pagoNeto = this.pago - this.descuento
    } else {
      this.descuento = "No obtiene descuento"
      this.pagoNeto = this.pago
    }
    return false
  }
}

