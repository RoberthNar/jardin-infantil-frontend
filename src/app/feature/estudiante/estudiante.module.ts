import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { MenuEstudianteComponent } from './components/menu-estudiante/menu-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteService } from './shared/service/estudiante.service';




@NgModule({
  declarations: [
    MenuEstudianteComponent,
    CrearEstudianteComponent,
    ListarEstudianteComponent
  ],
  imports: [
    EstudianteRoutingModule,
    SharedModule
  ],
  providers: [EstudianteService]
})
export class EstudianteModule { }
