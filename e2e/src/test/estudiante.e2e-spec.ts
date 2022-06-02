import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EstudiantePage } from '../page/estudiante/estudiante.po';

describe('workspace-project Estudiante', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let estudiante: EstudiantePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        estudiante = new EstudiantePage();
    });

    it('Deberia crear estudiante', () => {
        const NOMBRE_ESTUDIANTE = 'Estudiante Prueba EE';
        const FECHA_NACIMIENTO = '2021-01-01';
        const NOMBRE_ACUDIENTE = 'Acudiente Prueba EE';

        page.navigateTo();
        navBar.clickBotonEstudiantes();
        estudiante.clickBotonCrearEstudiantes();
        estudiante.ingresarNombreEstudiante(NOMBRE_ESTUDIANTE);
        estudiante.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        estudiante.ingresarNombreAcudiente(NOMBRE_ACUDIENTE);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar estudiantes', () => {
        page.navigateTo();
        navBar.clickBotonEstudiantes();
        estudiante.clickBotonListarEstudiantes();

        expect(4).toBe(estudiante.contarEstudiantes());
    });
});
