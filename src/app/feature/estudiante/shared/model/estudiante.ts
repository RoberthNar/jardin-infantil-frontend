export class Estudiante {
  id: number;
  nombreEstudiante: string;
  fechaEstudiante: string
  nombreAcudiente: string

  constructor(id: number, nombreEstudiante: string,
    fechaEstudiante: string, nombreAcudiente: string) {
      this.id = id;
      this.nombreEstudiante = nombreEstudiante;
      this.fechaEstudiante = fechaEstudiante;
      this.nombreAcudiente = nombreAcudiente;
    }
}
