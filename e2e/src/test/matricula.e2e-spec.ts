import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ListarMatriculaPage } from '../page/matricula/listar-matricula.po';
import { CrearMatriculaPage } from '../page/matricula/crear-matricula.po';
import { browser } from 'protractor';

describe('workspace-project Producto', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarMatricula: ListarMatriculaPage;
  let crearMatricula: CrearMatriculaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarMatricula = new ListarMatriculaPage();
    crearMatricula = new CrearMatriculaPage();
  });

  it('Deberia listar matriculas', () => {
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonMatricula();
    browser.sleep(1000);
    listarMatricula.clickBotonListarMatriculas();
    expect(0).toBe(listarMatricula.contarMatriculas());
  });

  it('Deberia Crear matriculas', () => {
    const INDICE_NOMBRE = 0;
    const INDICE_JORNADA = 1;
    const FECHA_INGRESO = '07/06/2022';

    page.navigateTo();
    navBar.clickBotonMatricula();
    listarMatricula.clickBotonListarMatriculas();
    listarMatricula.clickBotonCrearMatriculas();
    browser.sleep(1000);
    crearMatricula.seleccionarNombreEstudiante(INDICE_NOMBRE);
    browser.sleep(1000);
    crearMatricula.seleccionarJornada(INDICE_JORNADA);
    browser.sleep(1000);
    crearMatricula.ingresarFechaIngreso(FECHA_INGRESO);
    browser.sleep(1000);
    crearMatricula.clickBotonCrearMatricula();
    browser.sleep(1000);
    expect(1).toBe(listarMatricula.contarMatriculas());
  });

  it('Deberia eliminar matriculas', () => {
    const INDICE = 0;

    page.navigateTo();
    navBar.clickBotonMatricula();
    listarMatricula.clickBotonListarMatriculas();
    listarMatricula.clickBotonEliminarMatricula(INDICE);
    browser.sleep(1000);
    expect(0).toBe(listarMatricula.contarMatriculas());
  });
});
