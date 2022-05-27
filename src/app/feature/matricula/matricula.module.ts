import { NgModule } from '@angular/core';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { BorrarMatriculaComponent } from './components/borrar-matricula/borrar-matricula.component';
import { ListarMatriculaComponent } from './components/listar-matricula/listar-matricula.component';
import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { SharedModule } from '@shared/shared.module';
import { MatriculaService } from './shared/service/matricula.service';



@NgModule({
  declarations: [
    CrearMatriculaComponent,
    ListarMatriculaComponent,
    BorrarMatriculaComponent,
    MatriculaComponent
  ],
  imports: [
    MatriculaRoutingModule,
    SharedModule
  ],
  providers: [MatriculaService]
})
export class MatriculaModule { }
