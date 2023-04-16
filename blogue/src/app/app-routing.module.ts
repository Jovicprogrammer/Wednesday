import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasaeComponent } from './shared/basae/basae.component';
import { BeladonaComponent } from './shared/beladona/beladona.component';
import { MaquiavelComponent } from './shared/maquiavel/maquiavel.component';

const routes: Routes = [

  {path: '', component: BasaeComponent},
  {path: 'beladona', component: BeladonaComponent}, 
  {path: 'maquiavel', component: MaquiavelComponent},


];

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

