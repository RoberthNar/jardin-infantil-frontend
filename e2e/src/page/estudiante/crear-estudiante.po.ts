import { by, element } from 'protractor';

export class CrearEstudiantePage {
  private inputNombreEstudiante = element(by.id('nombreEstudiante'));
  private inputFechaNacimiento = element(by.id('fechaNacimiento'));
  private inputNombreAcudiente = element(by.id('nombreAcudiente'));
  private botonCancelarEstudiante = element(by.id('cancelarEstudiante'));
  private botonCrearEstudiante = element(by.id('botonCrearEstudiante'));
  private botonActualizarEstudiante = element(by.id('botonActualizarEstudiante'));
  private formCrearEstudiante = element(by.id('formCrearEstudiante'));

  async formularioCrearEstudiante() {
    await this.formCrearEstudiante.clear();
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

  async clickBotonActualizarEstudiante() {
    await this.botonActualizarEstudiante.click();
  }

  async clickBotonCrearEstudiante() {
    await this.botonCrearEstudiante.click();
  }

  async clickBotonCancelarEstudiante() {
    await this.botonCancelarEstudiante.click();
  }

}

