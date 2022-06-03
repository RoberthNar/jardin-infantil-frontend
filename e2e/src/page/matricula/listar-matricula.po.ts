import { by, element } from 'protractor';

export class ListarMatriculaPage {
  private linkCrearMatricula = element(by.id('linkCrearMatricula'));

  private linkListarMatricula = element(by.id('linkListarMatricula'));

  private listaMatricula = element.all(by.css('tbody tr'));

  async clickBotonCrearMatriculas() {
    await this.linkCrearMatricula.click();
  }

  async clickBotonListarMatriculas() {
    await this.linkListarMatricula.click();
  }

  async clickBotonEliminarMatricula(index) {
    await element(by.id('btnEliminarMatricula' + index)).click();
  }

  async contarMatriculas() {
    return this.listaMatricula.count();
  }

}
