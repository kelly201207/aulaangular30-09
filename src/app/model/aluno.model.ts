export class Aluno {
    constructor(
    public id: number=0,
    public nome: string="",
    public sexo: string="",
    public foto: string="",
    public disciplina: string="",
    public nota1: number=0,
    public nota2: number=0,
    public media: number=0,
    public sitiacao: string="Reprovado",
    ){}   

    ProcessarNotas(): void {
        this.media = (this.nota1 + this.nota2) / 2;
        this.sitiacao = this.media >= 6 ? "Aprovado" : "Reprovado";            
    }
}