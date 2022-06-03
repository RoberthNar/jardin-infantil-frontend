import { by, element, ElementFinder } from 'protractor';

export class CrearMatriculaPage {
  private selectNombreEstudiante = element(by.id('nombreEstudiante'));
  private selectJornada = element(by.id('jornada'));
  private inputFechaIngreso = element(by.id('fechaIngreso'));
  private botonCancelarMatricula = element(by.id('cancelarMatricula'));
  private botonCrearMatricula = element(by.id('botonCrearMatricula'));
  private formCrearMatricula = element(by.id('formCrearMatricula'));

  async formularioCrearMatricula() {
    await this.formCrearMatricula.clear();
  }

  async seleccionarNombreEstudiante(index: number) {
    await this.seleccionarOpcion(this.selectNombreEstudiante, index);
  }

  async seleccionarJornada(index: number) {
    await this.seleccionarOpcion(this.selectJornada, index);
  }

  async ingresarFechaIngreso(fechaIngreso) {
    await this.inputFechaIngreso.sendKeys(fechaIngreso);
  }

  async clickBotonCrearMatricula() {
    await this.botonCrearMatricula.click();
  }

  async clickBotonCancelarMatricula() {
    await this.botonCancelarMatricula.click();
  }

  async seleccionarOpcion(elemento: ElementFinder, index: number){
    await elemento.click();
    await elemento.all(by.tagName('option')).get(index).click();
  }

}

