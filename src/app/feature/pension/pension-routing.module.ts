import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPensionComponent } from './components/crear-pension/crear-pension.component';
import { ListarPensionComponent } from './components/listar-pension/listar-pension.component';
import { BorrarPensionComponent } from './components/borrar-pension/borrar-pension.component';
import { PensionComponent } from './components/pension/pension.component';


const routes: Routes = [
  {
    path: '',
    component: PensionComponent,
    children: [
      {
        path: 'crear',
        component: CrearPensionComponent
      },
      {
        path: 'listar',
        component: ListarPensionComponent
      },
      {
        path: 'borrar',
        component: BorrarPensionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PensionRoutingModule { }
