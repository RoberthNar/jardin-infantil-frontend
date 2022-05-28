export class Matricula {
  id: number;
  idEstudiante: number;
  idDocenteSala: number;
  jornada: string;
  fechaIngreso: string;

  constructor(
    idEstudiante: number,
    idDocenteSala: number,
    jornada: string,
    fechaIngreso: string,
    id?: number
  ) {
    this.id = id;
    this.idEstudiante = idEstudiante;
    this.idDocenteSala = idDocenteSala;
    this.jornada = jornada;
    this.fechaIngreso = fechaIngreso;
  }
}
