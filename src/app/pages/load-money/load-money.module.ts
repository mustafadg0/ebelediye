import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadMoneyPageRoutingModule } from './load-money-routing.module';

import { LoadMoneyPage } from './load-money.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadMoneyPageRoutingModule,
    SharedModule
  ],
  declarations: [LoadMoneyPage]
})
export class LoadMoneyPageModule {}
