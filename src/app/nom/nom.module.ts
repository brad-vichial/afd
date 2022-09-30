import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomPageRoutingModule } from './nom-routing.module';

import { NomPage } from './nom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomPageRoutingModule
  ],
  declarations: [NomPage]
})
export class NomPageModule {}
