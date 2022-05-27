import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { ListarMatriculaComponent } from './components/listar-matricula/listar-matricula.component';
import { BorrarMatriculaComponent } from './components/borrar-matricula/borrar-matricula.component';
import { MatriculaComponent } from './components/matricula/matricula.component';


const routes: Routes = [
  {
    path: '',
    component: MatriculaComponent,
    children: [
      {
        path: 'crear',
        component: CrearMatriculaComponent
      },
      {
        path: 'listar',
        component: ListarMatriculaComponent
      },
      {
        path: 'borrar',
        component: BorrarMatriculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
