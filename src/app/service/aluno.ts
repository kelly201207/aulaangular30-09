import { Injectable, signal, Signal } from '@angular/core';
import { Aluno } from '../model/aluno.model';
import { ALUNOS_MOCK } from '../shared/mock-alunos';
@Injectable({
  providedIn: 'root'
})
export class Alunoservice {
  private alunoSignal = signal<Aluno[]>([...ALUNOS_MOCK]);

  obterAlunos(){ 
    return this.alunoSignal.asReadonly();
  }
}
