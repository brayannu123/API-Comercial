import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPageRoutingModule } from './resumen-routing.module';

import { ResumenPage } from './resumen.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
   SharedModule,
    ResumenPageRoutingModule
  ],
  declarations: [ResumenPage]
})
export class ResumenPageModule {}
