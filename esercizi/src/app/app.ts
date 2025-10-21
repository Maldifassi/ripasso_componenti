import { Component, signal,  } from '@angular/core';
import { Componente1 } from './componente1/componente1'
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';
import { CommonModule } from '@angular/common';
import { Post } from './post/post';
import { Esercizio3 } from './esercizio3/esercizio3';


@Component({
  selector: 'app-root',
  imports: [Componente1, Esercizio1, Esercizio2, CommonModule, Post, Esercizio3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messaggio = 'ciao dal componente padre'

  posts = [
  {
    titolo: 'titolo1',
    testo: 'esempio di testo1'
  },
  {
    titolo: 'titolo2',
    testo: 'esempio di testo2'
  },
  {
    titolo: 'titolo3',
    testo: 'esempio di testo3'
  }
  ];
}