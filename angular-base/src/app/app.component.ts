import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { MiComponentPersona } from './personas/personas.component';
@Component({
  selector: 'app-root',

  imports: [RouterOutlet, Ejemplo1Component, MiComponentPersona],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-base';
}
