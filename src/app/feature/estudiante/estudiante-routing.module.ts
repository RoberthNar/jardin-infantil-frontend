import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
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
        path: 'actualizar/:id',
        component: CrearEstudianteComponent
      },
      {
        path: 'listar',
        component: ListarEstudianteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
