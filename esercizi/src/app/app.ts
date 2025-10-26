import { Component, signal } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';
import { Esercizio3 } from './esercizio3/esercizio3';
import { CommonModule } from '@angular/common';
import { Post } from './post/post';

interface PostType {
  titolo: string;
  testo: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, Componente1, Esercizio1, Esercizio2, Esercizio3, Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messaggio = 'Ciao da componente padre'

  posts: PostType[] = [
    {
      titolo: 'titolo1',
      testo: 'esempio di testo1'
    },
    {
      titolo: 'titolo1',
      testo: 'esempio di testo2'
    },
    {
      titolo: 'titolo3',
      testo: 'esempio di testo maggiore a venti caratteriiiiiiiiiiiiiiiii'
    }
  ];
  get postVisibili() {
    return this.posts.filter(p => p.testo.length < 20);
  }
