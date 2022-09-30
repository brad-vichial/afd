import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomPage } from './nom.page';

const routes: Routes = [
  {
    path: '',
    component: NomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomPageRoutingModule {}
