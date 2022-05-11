import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: AgregarComponent },
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
