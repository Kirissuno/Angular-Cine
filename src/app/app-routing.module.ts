import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPelisComponent } from './listar-pelis/listar-pelis.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path: "filmografia", component: ListarPelisComponent},
  {path: "", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
