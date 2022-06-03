import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { MenuEstudianteComponent } from './components/menu-estudiante/menu-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: MenuEstudianteComponent,
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
