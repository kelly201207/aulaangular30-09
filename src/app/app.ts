import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Aluno } from '../app/model/aluno.model';
import { Alunoservice } from './service/aluno';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aula1angular');
  alunos: Aluno[] = [];
  constructor(private alunosevice: Alunoservice) {
    
  }
}
