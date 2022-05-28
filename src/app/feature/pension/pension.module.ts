import { NgModule } from '@angular/core';

import { PensionRoutingModule } from './pension-routing.module';
import { BorrarPensionComponent } from './components/borrar-pension/borrar-pension.component';
import { ListarPensionComponent } from './components/listar-pension/listar-pension.component';
import { CrearPensionComponent } from './components/crear-pension/crear-pension.component';
import { PensionComponent } from './components/pension/pension.component';
import { SharedModule } from '@shared/shared.module';
import { PensionService } from './shared/service/pension.service';



@NgModule({
  declarations: [
    CrearPensionComponent,
    ListarPensionComponent,
    BorrarPensionComponent,
    PensionComponent],
  imports: [
    PensionRoutingModule,
    SharedModule
  ],
  providers: [PensionService]
})
export class PensionModule { }
