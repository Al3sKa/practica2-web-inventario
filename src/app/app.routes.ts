import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InventarioComponent } from './inventario/inventario.component'; 

export const routes: Routes = [
  { path: '', component: ProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'inicio', component: ProductoComponent },
  { path: 'inventario', component: InventarioComponent } 
];
