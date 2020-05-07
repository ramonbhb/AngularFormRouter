import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponent } from './aula/aula.component';

const routes: Routes = [
  { path: 'aula', component: AulaComponent },
  { path: 'aula/:id', component: AulaComponent},
  { path: '', redirectTo: '/aula', pathMatch: 'full'},
  // { path: '**', component: 404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
