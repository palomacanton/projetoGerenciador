import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'funcionarios/:id', component: FuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
