export class Pension {
  id: number;
  idEstudiante: number;
  horasMulta: number;
  mesPagado: string;
  valorTotal: number;

  constructor(
    idEstudiante: number,
    horasMulta: number,
    mesPagado: string,
    id?: number
  ) {
    this.id = id;
    this.idEstudiante = idEstudiante;
    this.horasMulta = horasMulta;
    this.mesPagado = mesPagado;
  }
}
