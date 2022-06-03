import { by, element } from 'protractor';

export class ListarEstudiantePage {
  private linkCrearEstudiante = element(by.id('linkCrearEstudiante'));

  private linkListarEstudiante = element(by.id('linkListarEstudiante'));

  private listaEstudiante = element.all(by.css('tbody tr'));

  async clickBotonCrearEstudiantes() {
    await this.linkCrearEstudiante.click();
  }

  async clickBotonListarEstudiantes() {
    await this.linkListarEstudiante.click();
  }

  async clickBotonActualizarEstudiantes(index: number) {
    await element(by.id('actualizarEstudiante' + index)).click();
  }

  async clickBotonEliminarEstudiante(index) {
    await element(by.id('btnEliminarEstudiante' + index)).click();
  }

  async contarEstudiantes() {
    return this.listaEstudiante.count();
  }

}
