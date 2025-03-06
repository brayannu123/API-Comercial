import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FilterComponent } from '../components/filter/filter.component';



@NgModule({
  declarations: [HeaderComponent, ProductCardComponent, FilterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [HttpClientModule, FormsModule, IonicModule, CommonModule ,
     HeaderComponent , ProductCardComponent,HeaderComponent, FilterComponent, ReactiveFormsModule ]
})
export class SharedModule { }
