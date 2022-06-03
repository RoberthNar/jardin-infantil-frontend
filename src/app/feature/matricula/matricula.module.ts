import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { MenuMatriculaComponent } from './components/menu-matricula/menu-matricula.component';
import { ListarMatriculaComponent } from './components/listar-matricula/listar-matricula.component';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaService } from './shared/service/matricula.service';



@NgModule({
  declarations: [
    CrearMatriculaComponent,
    ListarMatriculaComponent,
    MenuMatriculaComponent
  ],
  imports: [
    MatriculaRoutingModule,
    SharedModule
  ],
  providers: [MatriculaService]
})
export class MatriculaModule { }
