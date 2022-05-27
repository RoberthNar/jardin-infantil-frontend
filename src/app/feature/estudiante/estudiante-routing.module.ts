import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { BorrarEstudianteComponent } from './components/borrar-estudiante/borrar-estudiante.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: EstudianteComponent,
    children: [
      {
        path: 'crear',
        component: CrearEstudianteComponent
      },
      {
        path: 'listar',
        component: ListarEstudianteComponent
      },
      {
        path: 'borrar',
        component: BorrarEstudianteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
