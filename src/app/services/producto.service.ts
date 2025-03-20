import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[]=[
    new Producto(1, 'Charrones', 18, 'assets/charrones.jpg'),
    new Producto(2, 'Chicharrón Misión', 20, 'assets/chicharronMision.jpg'),
    new Producto(3, 'Toreadas Habanero', 13, 'assets/toreadasHabanero.jpg'),
    new Producto(4, 'Toreadas Jalapeño', 13, 'assets/toreadasJalapeño.jpg'),
    new Producto(5, 'Toreadas Naturales', 13, 'assets/toreadasNaturales.jpg')
  ];

  obtenerProductos(): Producto[]{
    return this.productos;
  }
  
}
