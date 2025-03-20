import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { ProductoComponent } from './components/producto/producto.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css',
  template:'<router-outlet></router-outlet>',
  standalone: true
})
export class AppComponent {
  title = 'mi-proyecto';
}
