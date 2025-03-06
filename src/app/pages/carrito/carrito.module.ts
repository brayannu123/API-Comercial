import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoPageRoutingModule } from './carrito-routing.module';

import { CarritoPage } from './carrito.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CarritoPageRoutingModule,
    SharedModule
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
