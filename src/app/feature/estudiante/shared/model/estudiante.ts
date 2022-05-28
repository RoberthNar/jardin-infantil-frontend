export class Estudiante {
  id: number;
  nombreEstudiante: string;
  fechaNacimiento: string;
  nombreAcudiente: string;

  constructor(nombreEstudiante: string, fechaNacimiento: string, nombreAcudiente: string, id?: number) {
    this.id = id;
    this.nombreEstudiante = nombreEstudiante;
    this.fechaNacimiento = fechaNacimiento;
    this.nombreAcudiente = nombreAcudiente;
  }
}
