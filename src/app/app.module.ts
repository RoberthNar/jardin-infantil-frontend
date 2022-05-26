import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearMatriculaComponent } from './feature/matricula/components/crear-matricula/crear-matricula.component';
import { ListarMatriculaComponent } from './feature/matricula/components/listar-matricula/listar-matricula.component';
import { BorrarMatriculaComponent } from './feature/matricula/components/borrar-matricula/borrar-matricula.component';
import { MatriculaComponent } from './feature/matricula/components/matricula/matricula.component';
import { CrearPensionComponent } from './feature/pension/components/crear-pension/crear-pension.component';
import { BorrarPensionComponent } from './feature/pension/components/borrar-pension/borrar-pension.component';
import { ListarPensionComponent } from './feature/pension/components/listar-pension/listar-pension.component';
import { PensionComponent } from './feature/pension/components/pension/pension.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearMatriculaComponent,
    ListarMatriculaComponent,
    BorrarMatriculaComponent,
    MatriculaComponent,
    CrearPensionComponent,
    BorrarPensionComponent,
    ListarPensionComponent,
    PensionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
