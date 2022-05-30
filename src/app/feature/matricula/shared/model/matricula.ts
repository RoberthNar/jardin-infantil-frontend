export class Matricula {
  id: number;
  idEstudiante: number;
  nombreEstudiante: string;
  idDocenteSala: number;
  nombreSala: string;
  nombreDocente: string;
  jornada: string;
  fechaIngreso: string;

  constructor(
    idEstudiante: number,
    nombreEstudiante: string,
    idDocenteSala: number,
    nombreSala: string,
    nombreDocente: string,
    jornada: string,
    fechaIngreso: string,
    id?: number
  ) {
    this.id = id;
    this.idEstudiante = idEstudiante;
    this.nombreEstudiante = nombreEstudiante;
    this.idDocenteSala = idDocenteSala;
    this.nombreSala = nombreSala;
    this.nombreDocente = nombreDocente;
    this.jornada = jornada;
    this.fechaIngreso = fechaIngreso;
  }
}
