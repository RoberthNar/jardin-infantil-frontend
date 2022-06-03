import { by, element } from 'protractor';

export class NavbarPage {
    linkEstudiante = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkMatricula = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPension = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonPension() {
        await this.linkPension.click();
    }

    async clickBotonEstudiantes() {
      await this.linkEstudiante.click();
    }

    async clickBotonMatricula() {
      await this.linkMatricula.click();
  }
}
