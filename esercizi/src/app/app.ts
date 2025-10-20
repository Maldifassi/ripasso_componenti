import { Component, signal } from '@angular/core';
import { Componente1 } from './componente1/componente1'
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';


@Component({
  selector: 'app-root',
  imports: [Componente1, Esercizio1, Esercizio2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esercizi');
}