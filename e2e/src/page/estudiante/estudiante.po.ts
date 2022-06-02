import { by, element } from 'protractor';

export class EstudiantePage {
  private linkCrearEstudiante = element(by.id('linkCrearEstudiante'));
  private linkListarEstudiantes = element(by.id('linkListarEstudiante'));
  private inputNombreEstudiante = element(by.id('nombreEstudiante'));
  private inputFechaNacimiento = element(by.id('fechaNacimiento'));
  private inputNombreAcudiente = element(by.id('nombreAcudiente'));
  private listaEstudiante = element.all(by.css('ul.estudiantes li'));

  async clickBotonCrearEstudiantes() {
    await this.linkCrearEstudiante.click();
  }

  async clickBotonListarEstudiantes() {
    await this.linkListarEstudiantes.click();
  }

  async ingresarNombreEstudiante(nombreEstudiante) {
    await this.inputNombreEstudiante.sendKeys(nombreEstudiante);
  }

  async ingresarFechaNacimiento(fechaNacimiento) {
    await this.inputFechaNacimiento.sendKeys(fechaNacimiento);
  }

  async ingresarNombreAcudiente(nombreAcudiente) {
    await this.inputNombreAcudiente.sendKeys(nombreAcudiente);
  }

  async contarEstudiantes() {
    return this.listaEstudiante.count();
  }

}
