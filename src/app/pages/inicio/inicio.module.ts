import { NgModule } from '@angular/core';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    InicioPageRoutingModule,
    SharedModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
