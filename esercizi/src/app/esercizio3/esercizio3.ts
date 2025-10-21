import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  nome: string;
  voto: number;
}

@Component({
  selector: 'app-esercizio3',
  imports:[CommonModule, FormsModule],
  templateUrl: './esercizio3.html',
  styleUrls: ['./esercizio3.css']
})
export class Esercizio3 {
 studenti : Student[] = [
  {nome: 'Maldi', voto: 9},
  {nome: 'Sampietro', voto: 2}, 
  {nome: 'Sampognaro', voto: 3}, 
  {nome: 'Abdul', voto: 3}
]

  newStudent: Student = {nome: "", voto: 0};

  addStudent() {
    console.log(this.newStudent)
    if (this.newStudent.nome && this.newStudent.voto >= 0) {
      this.studenti.push({ ...this.newStudent });
      this.newStudent = { nome: "", voto: 0 };
    }
  }

  removeStudent(index: number) {
    this.studenti.splice(index, 1);
  }
}