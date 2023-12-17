import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binging/data-binging.component';
import { NgIfNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'teste', component: NgIfNgforComponent},
  {path: 'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
