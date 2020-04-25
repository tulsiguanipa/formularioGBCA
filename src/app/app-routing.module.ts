import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './formulario/ingreso/ingreso.component';


const routes: Routes = [
  {path: 'formulario', component: IngresoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'formulario' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
