import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  @Input() titolo!: string;
  @Input() testo!: string;
}