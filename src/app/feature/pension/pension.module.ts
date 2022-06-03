import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CrearPensionComponent } from './components/crear-pension/crear-pension.component';
import { MenuPensionComponent } from './components/menu-pension/menu-pension.component';
import { ListarPensionComponent } from './components/listar-pension/listar-pension.component';
import { PensionRoutingModule } from './pension-routing.module';
import { PensionService } from './shared/service/pension.service';



@NgModule({
  declarations: [
    CrearPensionComponent,
    ListarPensionComponent,
    MenuPensionComponent
  ],
  imports: [
    PensionRoutingModule,
    SharedModule
  ],
  providers: [PensionService]
})
export class PensionModule { }
