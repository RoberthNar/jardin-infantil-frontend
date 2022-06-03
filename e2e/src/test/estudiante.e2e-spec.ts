import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ListarEstudiantePage } from '../page/estudiante/listar-estudiante.po';
import { CrearEstudiantePage } from '../page/estudiante/crear-estudiante.po';
import { browser } from 'protractor';

describe('workspace-project Producto', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarEstudiante: ListarEstudiantePage;
  let crearEstudiante: CrearEstudiantePage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarEstudiante = new ListarEstudiantePage();
    crearEstudiante = new CrearEstudiantePage();
  });

  it('Deberia listar estudiantes', () => {
    page.navigateTo();
    navBar.clickBotonEstudiantes();
    listarEstudiante.clickBotonListarEstudiantes();
    expect(1).toBe(listarEstudiante.contarEstudiantes());
  });

  it('Deberia Crear estudiantes', () => {
    const NOMBRE_ESTUDIANTE = 'Estudiante E2E';
    const FECHA_NACIMIENTO = '01/01/2021';
    const NOMBRE_ACUDIENTE = 'Acudiente E2E';

    page.navigateTo();
    navBar.clickBotonEstudiantes();
    listarEstudiante.clickBotonListarEstudiantes();
    listarEstudiante.clickBotonCrearEstudiantes();
    browser.sleep(1000);
    crearEstudiante.ingresarNombreEstudiante(NOMBRE_ESTUDIANTE);
    browser.sleep(1000);
    crearEstudiante.ingresarFechaNacimiento(FECHA_NACIMIENTO);
    browser.sleep(1000);
    crearEstudiante.ingresarNombreAcudiente(NOMBRE_ACUDIENTE);
    browser.sleep(1000);
    crearEstudiante.clickBotonCrearEstudiante();
    browser.sleep(1000);
    crearEstudiante.clickBotonCancelarEstudiante();
    browser.sleep(1000);
    expect(2).toBe(listarEstudiante.contarEstudiantes());
  });

  it('Deberia Actualizar estudiantes', () => {
    const NOMBRE_ESTUDIANTE = 'UpdateEE';
    const FECHA_NACIMIENTO = '01/01/2021';
    const NOMBRE_ACUDIENTE = 'updateEE';
    const INDICE = 1;

    page.navigateTo();
    navBar.clickBotonEstudiantes();
    listarEstudiante.clickBotonListarEstudiantes();
    browser.sleep(1000);
    listarEstudiante.clickBotonActualizarEstudiantes(INDICE);
    crearEstudiante.ingresarNombreEstudiante(NOMBRE_ESTUDIANTE);
    browser.sleep(1000);
    crearEstudiante.ingresarFechaNacimiento(FECHA_NACIMIENTO);
    browser.sleep(1000);
    crearEstudiante.ingresarNombreAcudiente(NOMBRE_ACUDIENTE);
    browser.sleep(1000);
    crearEstudiante.clickBotonActualizarEstudiante();
    expect(2).toBe(listarEstudiante.contarEstudiantes());
    expect(browser.getCurrentUrl()).toContain('/estudiante/listar');
  });

  it('Deberia eliminar estudiantes', () => {
    const INDICE = 1;

    page.navigateTo();
    navBar.clickBotonEstudiantes();
    listarEstudiante.clickBotonListarEstudiantes();
    listarEstudiante.clickBotonEliminarEstudiante(INDICE);
    browser.sleep(1000);
    expect(1).toBe(listarEstudiante.contarEstudiantes());
  });
});
