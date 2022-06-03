import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { ListarMatriculaComponent } from './components/listar-matricula/listar-matricula.component';
import { MenuMatriculaComponent } from './components/menu-matricula/menu-matricula.component';


const routes: Routes = [
  {
    path: '',
    component: MenuMatriculaComponent,
    children: [
      {
        path: 'crear',
        component: CrearMatriculaComponent
      },
      {
        path: 'actualizar/:id',
        component: CrearMatriculaComponent
      },
      {
        path: 'listar',
        component: ListarMatriculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
