import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPensionComponent } from './components/crear-pension/crear-pension.component';
import { ListarPensionComponent } from './components/listar-pension/listar-pension.component';
import { MenuPensionComponent } from './components/menu-pension/menu-pension.component';


const routes: Routes = [
  {
    path: '',
    component: MenuPensionComponent,
    children: [
      {
        path: 'crear',
        component: CrearPensionComponent
      },
      {
        path: 'actualizar/:id',
        component: CrearPensionComponent
      },
      {
        path: 'listar',
        component: ListarPensionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PensionRoutingModule { }
