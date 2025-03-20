import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventarioService } from '../services/inventario.service';
import { Producto } from '../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventario: Producto[] = [];
  productoEdit: Producto | null = null;
  nuevoProducto: Partial<Producto> = {};

  constructor(
    @Inject(InventarioService) private inventarioService: InventarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerInventario();
  }

  obtenerInventario() {
    this.inventario = this.inventarioService.obtenerInventario();
  }

  editarProducto(producto: Producto) {
    this.productoEdit = { ...producto };
  }

  guardarEdicion() {
    if (this.productoEdit) {
      this.inventarioService.actualizarProducto(this.productoEdit.id, this.productoEdit);
      this.productoEdit = null;
      this.obtenerInventario();
    }
  }

  cancelarEdicion() {
    this.productoEdit = null;
  }

  eliminarProducto(id: number) {
    this.inventarioService.eliminarProducto(id);
    this.obtenerInventario();
  }

  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio && this.nuevoProducto.imagen) {
      const producto = new Producto(0, this.nuevoProducto.nombre, this.nuevoProducto.precio, this.nuevoProducto.imagen);
      this.inventarioService.agregarProducto(producto);
      this.nuevoProducto = {};
      this.obtenerInventario();
    }
  }

  // Nuevo método para volver al catálogo
  volverAlCatalogo() {
    this.router.navigate(['/']);
  }
}
