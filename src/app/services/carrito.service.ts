import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: (Producto & { cantidad: number })[] = [];

  agregarProducto(producto: Producto) {
    const index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.carrito[index].cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerCarrito() {
    return [...this.carrito];
  }
  

  agregarUnidad(index: number) {
    if (this.carrito[index]) {
      this.carrito[index].cantidad++;
    }
  }

  eliminar(index: number) {
    if (this.carrito[index].cantidad > 1) {
      // Si hay más de 1 unidad, se decrementa
      this.carrito[index].cantidad--;
    } else {
      // Si solo queda 1, se elimina el producto del carrito
      this.carrito.splice(index, 1);
    }
  }

  generarXML(): string {
    let total = 0;
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<recibo>\n`;
  
    this.carrito.forEach(producto => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;
  
      xml += `
      <producto id="${producto.id}">
        <nombre>${producto.nombre}</nombre>
        <cantidad>${producto.cantidad}</cantidad>
        <precioUnitario>${producto.precio}</precioUnitario>
        <subtotal>${subtotal}</subtotal>
      </producto>\n`;
    });
  
    // Calcular IVA y total con IVA
    const iva = total * 0.16; // IVA al 16%
    const totalConIva = total + iva;
  
    xml += `<subtotalTotal>${total}</subtotalTotal>\n`;
    xml += `<iva>${iva}</iva>\n`;
    xml += `<totalConIVA>${totalConIva}</totalConIVA>\n`;
    xml += `</recibo>`;
  
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recibo.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  
    return xml;
  }
  

  constructor() { }
}
