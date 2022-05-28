import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteService } from './shared/service/estudiante.service';




@NgModule({
  declarations: [
    EstudianteComponent,
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
