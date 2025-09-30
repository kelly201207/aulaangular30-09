import { Aluno } from "../model/aluno.model";

export const ALUNOS_MOCK : Aluno[] = [
    new Aluno(1, "Ana", "f", "assets/imgs/aluna1.jpg", "java", 8, 7),
    new Aluno(2, "Bruno", "m", "assets/imgs/aluno1.jpg", "Angular", 6, 5),
    new Aluno(3, "Carla", "f", "assets/imgs/aluna2.jpg", "html", 9, 8),
    new Aluno(4, "Daniel", "m", "assets/imgs/aluno2.jpg", "Angular", 4, 6),
    new Aluno(5, "Elisa", "f", "assets/imgs/aluna3.jpg", "Angular", 7, 9),
];

ALUNOS_MOCK.forEach(aluno => {
    aluno.ProcessarNotas();
});