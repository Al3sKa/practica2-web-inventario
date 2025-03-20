import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']  // Cambiado: styleUrl -> styleUrls
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];

  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  generarXML() {
    this.carritoService.generarXML();
  }

  volverAComprar() {
    this.router.navigate(['/']);
  }

  eliminarProducto(index: number) {
    this.carritoService.eliminar(index);
    this.carrito = this.carritoService.obtenerCarrito();
  }
  
  agregarUnidad(index: number) {
    this.carritoService.agregarUnidad(index);
    this.carrito = this.carritoService.obtenerCarrito();
  }
  
}
