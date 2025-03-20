import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  // Inicializamos el inventario con algunos productos. Puedes usar los mismos del ProductoService.
  private inventario: Producto[] = [
    new Producto(1, 'Charrones', 18, 'assets/charrones.jpg'),
    new Producto(2, 'Chicharrón Misión', 20, 'assets/chicharronMision.jpg'),
    new Producto(3, 'Toreadas Habanero', 13, 'assets/toreadasHabanero.jpg'),
    new Producto(4, 'Toreadas Jalapeño', 13, 'assets/toreadasJalapeño.jpg'),
    new Producto(5, 'Toreadas Naturales', 13, 'assets/toreadasNaturales.jpg')
  ];

  // Método para obtener todos los productos del inventario.
  obtenerInventario(): Producto[] {
    return [...this.inventario];
  }

  // Método para añadir un nuevo producto
  agregarProducto(producto: Producto) {
    // Se puede generar un nuevo id (aquí es simple, sumamos 1 al mayor existente)
    const nuevoId = this.inventario.length > 0 ? Math.max(...this.inventario.map(p => p.id)) + 1 : 1;
    this.inventario.push({ ...producto, id: nuevoId });
  }

  // Método para eliminar un producto dado su id
  eliminarProducto(id: number) {
    const index = this.inventario.findIndex(p => p.id === id);
    if (index !== -1) {
      this.inventario.splice(index, 1);
    }
  }

  // Método para actualizar un producto dado su id.
  // Se espera un objeto parcial con los nuevos valores.
  actualizarProducto(id: number, nuevosDatos: Partial<Producto>) {
    const index = this.inventario.findIndex(p => p.id === id);
    if (index !== -1) {
      this.inventario[index] = { ...this.inventario[index], ...nuevosDatos };
    }
  }

  constructor() { }
}
